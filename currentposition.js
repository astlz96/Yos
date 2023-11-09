const mongoose = require("mongoose");

const UrlsConfig = new mongoose.Schema(
  {
    current_position:{ type: String, required: false, default: 0 }
  }
);

module.exports = mongoose.model("CurrentPositionDB", UrlsConfig);