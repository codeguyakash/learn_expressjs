const express = require("express");
const cookieParser = require("cookie-parser");
const { Worker } = require("worker_threads");
const app = express();
const PORT = process.env.PORT || 5000;
const THREAD_COUNT = 8;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

function createWorker() {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./four-workers.js", {
      workerData: { thread_count: THREAD_COUNT },
    });
    worker.on("message", (data) => {
      resolve(data);
    });
    worker.on("error", (error) => {
      reject(`error ${error}`);
    });
  });
}
app.get("/non-blocking/", (req, res) => {
  res.status(200).send(`<h1>This page is non-blocking</h1>`);
});
app.get("/blocking", async (req, res) => {
  const workerPromises = [];
  for (let i = 0; i < THREAD_COUNT; i++) {
    workerPromises.push(createWorker());
  }
  try {
    const thread_results = await Promise.all(workerPromises);
    const total = thread_results.reduce((acc, val) => acc + parseFloat(val), 0);
    res.status(200).send(total.toString());
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
const userRouter = require("./routes/user.routes");
const { fchmod, lstat } = require("fs");
app.use("/api/v1", userRouter);

app.listen(PORT, () => {
  console.log("Server Running on", PORT);
});
