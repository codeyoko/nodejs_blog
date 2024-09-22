const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, require: true },
    lever: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

//add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: "all", deletedAt: true });

module.exports = mongoose.model("Course", Course);
