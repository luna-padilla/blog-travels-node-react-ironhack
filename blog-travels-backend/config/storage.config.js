// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const multer = require("multer");

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "imagenes-blog",
//   },
// });

// const parser = multer({ storage: storage });

// module.exports = parser;
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

function getCloudinaryUrl(publicId) {
    return cloudinary.url(publicId);
}

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "imagenes-blog",
    },
});

const parser = multer({ storage: storage });

module.exports = {
    cloudinary,
    getCloudinaryUrl,
    parser,
};