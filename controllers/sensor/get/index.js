const { SensorService } = require("../../../services");

exports.getAll= async(req, res) => {
    try {
        const sensors = await SensorService.getAllSensors();
        res.json(sensors);
    } catch (error) {
        console.error('Error fetching sensors:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
