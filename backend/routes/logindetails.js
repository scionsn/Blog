const express = require("express");
const logindetailsroute = express.Router();
const bcrypt = require("bcrypt");
const crud = require("../db/helpers/logindetailscrud");
logindetailsroute.get("/showlogin", (req, res) => {
  res.set({ "content-type": "application/json" });
  crud
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

logindetailsroute.post("/addlogin", async (req, res) => {
  res.set({ "content-type": "application/json" });
  try {
    const hashedPassword = await bcrypt.hash(req.body.pwd, 10);
    const user = { username: req.body.username, pwd: hashedPassword };
    crud
      .add(user)
      .then((doc) => {
        console.log("doc added");
        res.json(doc);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  } catch {
    res.status(500).json("error");
  }
});

logindetailsroute.route("/updatelogin/:id").post((req, res) => {
  crud
    .findbyid(req.params.id)
    .then((doc) => {
      doc.username = req.body.username;
      doc.pwd = req.body.pwd;

      doc
        .save()
        .then(() => res.json(" updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

logindetailsroute.route("/deletelogin/:id").delete((req, res) => {
  crud
    .delete(req.params.id)
    .then(() => res.json(" deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
logindetailsroute.route("/:id").get((req, res) => {
  crud
    .findbyid(req.params.id)
    .then((val) => res.json(val))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = logindetailsroute;
