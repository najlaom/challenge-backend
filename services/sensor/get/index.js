const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllSensors = async () => {
    try {
        const sensors = await prisma.sensor.findMany();
        return sensors;
    } catch (error) {
        throw error;
    }
}

module.exports = getAllSensors;
