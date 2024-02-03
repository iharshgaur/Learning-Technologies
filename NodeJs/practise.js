const express = require("express");
const EventEmitter = require("events");
const logger = require('pino')();
const cors = require("cors");
const { isUserAllowed } = require("./middleware");

const emitter = new EventEmitter(); // Correct spelling
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  if (isUserAllowed(req)) {
    next();
  } else {
    res.status(403).end("Not authorized to visit that page");
  }
});

app.post("/about", (req, res) => {
  emitter.emit("about");
  res.status(200).send("This is about page");
});

app.get("/", (req, res) => {
  logger.info("Logging!!");
  res.status(200).send("Hello World");
});

app.use((req, res) => {
  res.status(404).send(`${req.url} - Page not found`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
