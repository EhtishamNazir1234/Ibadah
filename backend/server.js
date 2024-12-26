require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const AuthRoutes = require("./Routes/AuthRouter");

// This will allow cross-origin requests

const app = express();
app.use(bodyParser.json());
app.use(cors());
// Dummy prayer times data
// const prayerTimes = [
//   { name: "Fajr", time: "3:24 AM", iqamah: "4:15 AM" },
//   { name: "Zuhr", time: "1:09 PM", iqamah: "1:30 PM" },
//   { name: "Asr", time: "6:29 PM", iqamah: "7:30 PM" },
//   { name: "Maghrib", time: "9:01 PM", iqamah: "9:01 PM" },
//   { name: "Isha", time: "10:10 PM", iqamah: "10:45 PM" },
//   { name: "Jummah", time: "1:10 PM", iqamah: "2:45 PM" },
// ];
// mongooseconnection
mongoose
  .connect(`${process.env.mongo_dbconnection}Ibadaah`)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// API route to send prayer times
app.use("/api", AuthRoutes);

const port = process.env.port || 5000;
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
