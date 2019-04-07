const sensors = require('../controllers/sensor.controller');

const sensorRoutes = function (app) {
  app.get('/api/sensorData', sensors.getSensorData);
  app.get('/api/sensorData/:room', sensors.getRoomData);
};

module.exports = sensorRoutes;
