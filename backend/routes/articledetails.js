const express = require("express");
const articledetailsroute = express.Router();
const crud = require("../db/helpers/articledetailscrud");
articledetailsroute.get("/showarticles", (req, res) => {
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
articledetailsroute.post("/addarticles", (req, res) => {
  res.set({ "content-type": "application/json" });
  const obj = {
    name: req.body.name,
    content: req.body.content,
    date: req.body.date,
    tag: req.body.tag,
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
articledetailsroute.route("/updatearticles/:id").post((req, res) => {
  crud
    .findbyid(req.params.id)
    .then((doc) => {
      (doc.name = req.body.name),
        (doc.content = req.body.content),
        (doc.date = req.body.date),
        (doc.tag = req.body.tag);

      doc
        .save()
        .then(() => res.json(" updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

articledetailsroute.route("/deletearticles/:id").delete((req, res) => {
  crud
    .delete(req.params.id)
    .then(() => res.json(" deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
articledetailsroute.route("/:id").get((req, res) => {
  crud
    .findbyid(req.params.id)
    .then((val) => res.json(val))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = articledetailsroute;
