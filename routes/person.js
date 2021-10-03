const express = require('express');
const personRouter = express.Router();

const Person = require("../models/person");

//Add new person
//method:POST
//req-body

personRouter.post("/", async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    let result = await newPerson.save();
    res.send({ result: result, msg: "person added successfully"})
  }catch (error) {
    res.send({ msg: "cannot add the person"});
  }
});

//get persons
//method:get

personRouter.get("/", async (req, res) => {
  try {
    let result = await Person.find();
    res.send({ persons: result });
  }catch (error) {
    res.send({ msg: error });
  }
});

//get by id person
//method:get
//params id

personRouter.get("/:id", async (req, res) => {
  try {
    let result = await Person.findOne({ _id: req.pqrams.id});
    res.send({ person: result });
  }catch (error) {
    res.send({ msg: error });
  }
});

//delete person
//method:Delete
//params id

personRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Person.findByIdAndDelete({ _id: req.pqrams.id});
    res.send({ msg:"user deleted successfully" });
  }catch (error) {
    res.send({ msg: error });
  }
});


personRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Person.findMany({ _id: req.pqrams.id});
    res.send({ msg:"user deleted successfully" });
  }catch (error) {
    res.send({ msg: error });
  }
});

//update person
//method:put
//params id
//req-body

personRouter.put("/:id", async (req, res) => {
  try {
    let result = await Person.findByIdAndUpdate({ _id: req.pqrams.id},{$set:{...req.body}});
    res.send({ msg:"user updated successfully" });
  }catch (error) {
    res.send({ msg: error });
  }
});


module.exports = personRouter;