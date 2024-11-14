const mongoose = require("mongoose");

const uri = "mongodb+srv://SrinathK:srinathk@cluster0.ohljv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas", err);
  });
