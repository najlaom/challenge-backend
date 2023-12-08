const { SensorService } = require("../../../services");

exports.postSensor = async(req, res) =>{
    try {
        const newSensor = await SensorService.createSensor(req.body);
        res.json(newSensor);
    } catch (error) {
        console.error('Error creating sensor:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
