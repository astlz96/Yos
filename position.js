const mongoose = require("mongoose");

const UrlsConfig = new mongoose.Schema(
  {
    id: { type: String, required: false },
    server : { type: String, required: false },
    amount: { type: String, required: false },
    position:{ type: String, required: false, default: 0 }
  }
);

module.exports = mongoose.model("PositionDB", UrlsConfig);