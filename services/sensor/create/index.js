const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (sensorData) => {
    try {
        const newSensor = await prisma.sensors.create({
            data: sensorData,
        });
        return newSensor;
    } catch (error) {
        throw error;
    }
}

module.exports = create;
