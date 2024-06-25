const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

var alltodo = [];

app.post("/todos", (req, res) => {
  var todo = {
    title: req.body.title,
    description: req.body.description,
  };
  alltodo.push(todo);
  console.log(alltodo);
  if ((req.body.title, req.body.description)) {
    return res.json({ alltodo: alltodo });
  }

  res.json({ error });
});

app.get("/getlist", (req, res) => {
  res.json(alltodo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
