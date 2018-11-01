require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const requestPromise = require("request-promise");
const port = 3000;

app.use(cors());

app.get("/search", (req, res) => {
  let event = req.query.q;
  requestPromise(
    `http://content.guardianapis.com/search?q=${event}&api-key=${
      process.env.API_KEY
    }`
  ).then(body => {
    res.send(body);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
