require("dotenv").config();
require("../config/db.config");
const mongoose = require("mongoose");
const { Faker, es, en } = require("@faker-js/faker");
const Travel = require("../models/travel.model");
const Comment = require("../models/comment.model");

const faker = new Faker({ locale: [es, en] });
const desiredTravels = 5;
const desiredComments = 10;

function getRandomTravel() {
  return {
    image: faker.image.url(),
    title: faker.lorem.words({ min: 2, max: 4 }),
    subtitle: faker.lorem.sentence(),
    description: faker.lorem.paragraphs({ min: 3, max: 6 }),
  };
}

function getRandomComment(travelId) {
  return {
    comment: faker.lorem.sentence(),
    likes: [],
    dislikes: [],
    replies: [],
    travel: travelId,
  };
}

async function seedDatabase() {
  try {
    await Travel.deleteMany({});
    await Comment.deleteMany({});

    const travels = await Travel.create(
      Array.from({ length: desiredTravels }, () => getRandomTravel())
    );

    const comments = [];
    for (let i = 0; i < desiredComments; i++) {
      const travel = faker.helpers.arrayElement(travels);
      const comment = await Comment.create(getRandomComment(travel._id));
      travel.comments.push(comment._id);
      await travel.save();
      comments.push(comment);
    }

    console.info(`- Created travels: ${travels.length}`);
    console.info(`- Created comments: ${comments.length}`);
  } catch (error) {
    console.error("Error al poblar la base de datos:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
