import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    seceretCode: {
      type: String,
      required: false,
    },
    createdAt: {
      type: String,
      required: true,
    },
    videos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Video`,
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`User`, User, `User`);
