import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
  {
    Sender_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Receiver_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
    seen: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
