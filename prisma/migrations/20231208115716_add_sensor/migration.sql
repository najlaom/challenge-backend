-- CreateTable
CREATE TABLE "sensors" (
    "id" SERIAL NOT NULL,
    "serial" TEXT NOT NULL,
    "swVersion" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "gps" TEXT NOT NULL,

    CONSTRAINT "sensors_pkey" PRIMARY KEY ("id")
);
