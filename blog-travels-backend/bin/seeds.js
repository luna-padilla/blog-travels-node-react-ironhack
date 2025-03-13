const fs = require("fs");
require("dotenv").config();
require("../config/db.config");
const mongoose = require("mongoose");
const { Faker, es, en } = require("@faker-js/faker");
const Travel = require("../models/travel.model");
const Comment = require("../models/comment.model");
const User = require("../models/user.model");
const path = require("path");

// Define la carpeta y archivo donde se guardarán los datos falsos
const dataDir = path.join(__dirname, "../data");
const filePath = path.join(dataDir, "faker-data-info.md");

const faker = new Faker({ locale: [es, en] });
const desiredUsers = 3;
const desiredTravels = 5;
const desiredComments = 10;

const fakeData = [];

function getRandomUser() {
  const user = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12 }),
    avatar: faker.image.avatar(),
    role: "user",
  };
  fakeData.push(user);
  return user;
}

function getRandomTravel(userId) {
  const travel = {
    image: faker.image.url(),
    title: faker.lorem.words({ min: 2, max: 4 }),
    subtitle: faker.lorem.sentence(),
    description: faker.lorem.paragraphs({ min: 3, max: 6 }),
    createdBy: userId,
    comments: [],
  };
  fakeData.push(travel);
  return travel;
}

function getRandomComment(travelId, userId) {
  const comment = {
    comment: faker.lorem.sentence(),
    likes: [],
    dislikes: [],
    replies: [],
    travel: travelId,
    createdBy: userId,
  };
  fakeData.push(comment);
  return comment;
}

async function seedDatabase() {
  try {
    await User.deleteMany({});
    await Travel.deleteMany({});
    await Comment.deleteMany({});

    const users = await User.create(
      Array.from({ length: desiredUsers }, () => getRandomUser())
    );

    if (users.length === 0) {
      console.error("Error: No users created.");
      return;
    }

    const travels = await Travel.create(
      users.flatMap((user) =>
        Array.from({ length: Math.ceil(desiredTravels / users.length) }, () =>
          getRandomTravel(user._id)
        )
      )
    );

    if (travels.length === 0) {
      console.error("Error: No travels created.");
      return;
    }

    const comments = [];
    for (let i = 0; i < desiredComments; i++) {
      const travel = faker.helpers.arrayElement(travels);
      const user = faker.helpers.arrayElement(users);

      if (!travel || !user) {
        console.warn("Skipping invalid travel or user.");
        continue;
      }

      const comment = await Comment.create(
        getRandomComment(travel._id, user._id)
      );

      await Travel.findByIdAndUpdate(travel._id, {
        $push: { comments: comment._id },
      });
      comments.push(comment);
    }

    console.info(`- Created users: ${users.length}`);
    console.info(`- Created travels: ${travels.length}`);
    console.info(`- Created comments: ${comments.length}`);

    // 🔹 AHORA sí guardamos los datos en el archivo
    fs.writeFileSync(filePath, JSON.stringify(fakeData, null, 2));
    console.log(`Datos falsos guardados en ${filePath}`);
  } catch (error) {
    console.error("Error al poblar la base de datos:", error);
  } finally {
    mongoose.connection.close();
  }
}
seedDatabase();