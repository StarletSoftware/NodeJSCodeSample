const Utils = require('../utils/utils');
const WeatherLog = require('../models/weather_log');

module.exports = {

  createWeatherLog(req, res, next) {
    const weatherProps = req.body;
    console.log(weatherProps);
    WeatherLog.create(weatherProps)
      .then((log) => res.send(Utils.response(true)))
      .catch(next);
  },

  getAllWeatherLogs(req, res, next) {
    WeatherLog.find({})
      .then((logs) => res.send(Utils.response(true, undefined, undefined, logs)))
      .catch(next);
  },

  getWeatherLog(req, res, next) {
    var {id} = req.params;

    WeatherLog.findById(id)
      .then((log) => res.send(Utils.response(true, undefined, undefined, log)))
      .catch(next);
  },

  deleteWeatherLog(req, res, next) {
    const {id} = req.params;

    WeatherLog.findByIdAndRemove(id)
      .then((log) => res.send(Utils.response(true, 'The log has been removed.')))
      .catch(next);
  },

  updateWeatherLog(req, res, next) {
    const {id} = req.params;
    const weatherProps = req.body;

    WeatherLog.findOneAndUpdate({_id:id}, weatherProps, {new: true})
      .then((log) => res.send(Utils.response(true, undefined, undefined, log)))
      .catch(next);
  }

}
