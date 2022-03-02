const router = require("express").Router();
const Todo = require("../models/todo");

router.get("/", (req, res) => {
  Todo.find((err, result) => {
    if(err) throw new Error(err);
    console.log(result);
  });
});

module.exports = router;