const express = require("express");
const cookieParser = require("cookie-parser");
const { Worker } = require("worker_threads");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//Problem is here
app.get("/non-blocking/", (req, res) => {
  res.status(200).send(`<h1>This page is non-blocking</h1>`);
});
app.get("/blocking", (req, res) => {
  let count = 0;
  for (let i = 0; i < 20_000_000_000; i++) {
    count++;
  }
  console.log(count);
  res.status(200).send(`<h1>This page is blocking ${count}</h1>`);
});

//Solution is here

// app.get("/blocking2", (req, res) => {
//   const worker = new Worker("./worker.js");
//   worker.on("message", (data) => {
//     res.status(200).send(`Result is ${data}`);
//   });
//   worker.on("error", (error) => {
//     res.status(200).send(`Result is ${error}`);
//   });
// });
const userRouter = require("./routes/user.routes");
app.use("/api/v1", userRouter);

app.listen(PORT, () => {
  console.log("Server Running on", PORT);
});
