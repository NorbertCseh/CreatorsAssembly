const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Adatbázis konfiguráció
const dataBase = require("./config/keys").mongoURI;

//Kapcsolodás az adatbázishoz
mongoose
  .connect(dataBase)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

//Passport
app.use(passport.initialize());

//Passport beallitás
require("./config/passport")(passport);

app.use("./api/users", users);
app.use("./api/profile", profile);
app.use("./api/posts", posts);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
