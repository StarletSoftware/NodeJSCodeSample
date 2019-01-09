const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeatherLogSchema = new Schema({
  temp : Number,
  date: {
    type: Number,
    default: function() {
      return Math.floor(new Date().getTime() / 1000)
    }
  },
  location: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
});

const WeatherLog = mongoose.model('weatherlog', WeatherLogSchema);

module.exports = WeatherLog;
