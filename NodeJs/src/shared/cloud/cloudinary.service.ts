import { CloudinaryStorage } from "multer-storage-cloudinary";
import { config } from "../../app/app.config";

import * as path from "path";
// import Datauri from "datauri";

const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const streamifier = require("streamifier");
const datauri = require("datauri");
const fs = require("fs");
const DatauriParser = require("datauri/parser");
const parser = new DatauriParser();
cloudinary.config({
  cloud_name: config.cloudinary.name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    // folder: "DEV",
  },
});

const upload = multer({ storage: storage });

class CloudinaryService {
  async uploadToCloudinary(files) {
    let uri = undefined;
    for (const file of files) {
      uri = parser.format(file.originalname, file.buffer);
    }
    return cloudinary.uploader
      .upload(uri.content)
      .then((result) => {
        console.log("Upload success");
        return {
          message: "Success",
          url: result.url,
        };
      })
      .catch((error) => {
        console.log(error);
        return { message: "Fail" };
      });
  }
}

export const cloudinaryService = new CloudinaryService();
