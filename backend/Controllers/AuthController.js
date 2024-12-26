
const Azaan = require("../models/Azaan"); // Import the Azaan model

// POST request to create a new Azaan entry
exports.createAzaan = async (req, res) => {
  try {
    const { iqamah, name, time } = req.body;

    // Create a new Azaan instance
    const newAzaan = new Azaan({
      iqamah,
      name,
      time,
    });

    // Save the Azaan instance to the database
    await newAzaan.save();

    res.status(201).json({
      message: "Azaan created successfully!",
      data: newAzaan,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

// GET request to fetch all Azaan entries
exports.getAzaans = async (req, res) => {
  try {
    // Fetch all Azaan entries from the database
    const azaans = await Azaan.find();

    res.status(200).json({
      message: "Azaans fetched successfully!",
      data: azaans,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};
