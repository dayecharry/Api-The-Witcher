const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    illustration: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "Characters",
  }
);

const Character = mongoose.model("Characters", characterSchema);
module.exports = Character;