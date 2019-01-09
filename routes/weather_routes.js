const WeatherController = require('../controllers/weather_controller');

module.exports = (app) => {

   app.get('/api/weather', WeatherController.getAllWeatherLogs);

   app.get('/api/weather/:id', WeatherController.getWeatherLog);

   app.post('/api/weather', WeatherController.createWeatherLog);

   app.delete('/api/weather/:id', WeatherController.deleteWeatherLog);

   app.put('/api/weather/:id', WeatherController.updateWeatherLog);

}
