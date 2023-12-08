// routes/sensorRoute.js
const express = require('express');
const router = express.Router();
const getSensor = require('../controllers/sensor/get'); 
const postSensor = require('../controllers/sensor/post'); // Update the import path

router.post('/sensors', postSensor.postSensor);
router.get('/sensors', getSensor.getAll);

module.exports = router;
