const express = require("express");
const path = require("path");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dataBase = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
mongoose
  .connect(dataBase)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

const passport = require("passport");
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("./api/users", users);
app.use("./api/profile", profile);
app.use("./api/posts", posts);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
