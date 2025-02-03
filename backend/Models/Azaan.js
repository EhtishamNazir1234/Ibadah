import mongoose from "mongoose";

const AzaanSchema = new mongoose.Schema({
  iqamah: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Azaan = mongoose.model("Azaan", AzaanSchema);

export default Azaan;
