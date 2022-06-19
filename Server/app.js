const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: "GET",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  // Send Cookie
  res.cookie("login", "sany", {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: false,
    // signed: true,
  });
  res.status(200).json({
    country: "Bangladesh",
    city: "Dhaka",
    degination: "Software Engineer",
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
