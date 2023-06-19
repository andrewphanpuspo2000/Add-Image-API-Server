import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  comment: [{ type: String }],
});

export default mongoose.model("Item", taskSchema);
