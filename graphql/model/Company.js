import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Company = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: false,
    },
    snackList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Snack`,
      },
    ],
  },
  { versionKey: false }
);
