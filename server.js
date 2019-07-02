require("dotenv").config();
global.fetch = require("node-fetch"); // for unsplash js to work
const config = require("universal-config"); // allow config parameters in a more elegant way
const Unsplash = require("unsplash-js").default;
const toJson = require("unsplash-js").toJson;
const express = require("express");
const fileUpload = require("express-fileupload");

const unsplash = new Unsplash({
  applicationId: config.get("APPLICATION_ID"),
  secret: config.get("SECRET"),
  callbackUrl: config.get("CALLBACK_URL")
});

const app = express();
app.use(fileUpload());

//infinite scroll
app.get("/api/photos", (req, res) => {
  unsplash.photos
    // api/photos?start=1
    .listPhotos(req.query.start, req.query.count)
    .then(toJson)
    .then(json => res.json(json));
});

// fileUpload

app.post("/upload", (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No file uploaded" });

  //file is in react app
  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    console.log(`file uploaded succesfully, ${file.name}`);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Started listening at port ${PORT}`));
