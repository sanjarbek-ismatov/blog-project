const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

const connection = mongoose.connection;
var gfs, gfb;
connection.once("open", () => {
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection("uploads");
  gfb = new mongoose.mongo.GridFSBucket(connection.db, {
    bucketName: "uploads",
  });
});
router.get("/image/:filename", async (req, res) => {
  try {
    await gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      if (err) throw err;
      if (!file) return res.status(404).send("Not found");
      if (file.contentType.includes("image")) {
        const readStream = gfb.openDownloadStream(file._id);
        readStream.pipe(res.contentType(file.contentType));
      }
    });
  } catch (ex) {
    res.status(404).send("Error");
  }
});
router.get("/files", async (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (err) throw err;
    res.status(200).send(files);
  });
});
router.get("/file/:filename", async (req, res) => {
  await gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (err) throw err;
    res.status(200).send(file);
  });
});

module.exports = router;
