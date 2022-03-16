const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    email: { type: String, trim: true },
    whatsapp: { type: String, trim: true },
    url: { type: String, trim: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Land', schema);
