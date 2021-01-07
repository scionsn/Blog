const express = require("express");
const usersroute = express.Router();
const crud = require("../db/helpers/userscrud");
usersroute.get("/showusers", (req, res) => {
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
usersroute.post("/addusers", (req, res) => {
  res.set({ "content-type": "application/json" });
  const obj = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };
  crud
    .add(obj)
    .then((doc) => {
      console.log("doc added");
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});
usersroute.route("/updateuser/:id").post((req, res) => {
  crud
    .findbyid(req.params.id)
    .then((doc) => {
      doc.name = req.body.name;
      doc.email = req.body.email;
      doc.age = req.body.age;

      doc
        .save()
        .then(() => res.json(" updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

usersroute.route("/deleteuser/:id").delete((req, res) => {
  crud
    .delete(req.params.id)
    .then(() => res.json(" deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
usersroute.route("/:id").get((req, res) => {
  crud
    .findbyid(req.params.id)
    .then((val) => res.json(val))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = usersroute;
