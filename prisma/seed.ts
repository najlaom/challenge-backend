// prisma/seed/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.sensor.create({
    data: {
      serial: "TEM-00001",
      swVersion: "01-01",
      temperature: "28",
      date: new Date("2023-04-17T12:22:43"),
      gps: "52.52,12.04",
    },
  });

  console.log('Seed data inserted successfully');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
