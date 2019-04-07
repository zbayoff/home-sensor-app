const db = require('../../config/database');

exports.getSensorData = function (req, res) {
  db.query('Select * from sensor_readings', (error, results) => {
    if (error) {
      console.log('err: ', error);
    } else {
      res.send(results);
    }
  });
};

exports.getRoomData = function (req, res) {
  const { room } = req.params;
  db.query(`Select * from sensor_readings where SensorLocation='${room}'`, (error, results) => {
    if (error) {
      console.log('err: ', error);
    } else {
      res.send(results);
    }
  });
};
