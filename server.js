require("./server/db/mongoose");
const express = require("express");
const path = require("path");
const userRouter = require("./server/routers/userRouter");
const classRouter = require("./server/routers/classRouter");

const app = express();
const port = process.env.PORT;
console.log(port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API calls
app.use("/api", userRouter);
app.use("/api", classRouter);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // // Handle React routing, return all requests to React app
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
