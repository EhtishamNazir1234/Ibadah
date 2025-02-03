
import Azaan from "../Models/Azaan.js";

export const getAzaans = async (req, res) => {
  try {
    const azaans = await Azaan.find();
    res
      .status(200)
      .json({ message: "Azaans fetched successfully!", data: azaans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

export const createAzaan = async (req, res) => {
  try {
    const { iqamah, name, time } = req.body;
    const newAzaan = new Azaan({ iqamah, name, time });
    await newAzaan.save();
    res
      .status(201)
      .json({ message: "Azaan created successfully!", data: newAzaan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};
