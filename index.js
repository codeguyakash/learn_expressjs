const express = require("express");
const cookieParser = require("cookie-parser");
const { Worker } = require("worker_threads");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/non-blocking/", (req, res) => {
  res.status(200).send("This page is non-blocking");
});

app.get("/blocking", (req, res) => {
  const worker = new Worker("./worker.js");
  worker.on("message", (data) => {
    res.status(200).send(`Result is ${data}`);
  });
  worker.on("error", (error) => {
    res.status(200).send(`Result is ${error}`);
  });
});
const userRouter = require("./routes/user.routes");
app.use("/api/v1", userRouter);

app.listen(PORT, () => {
  console.log("Server Running on", PORT);
});
