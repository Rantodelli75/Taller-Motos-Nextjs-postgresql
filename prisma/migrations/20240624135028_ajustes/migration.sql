/*
  Warnings:

  - A unique constraint covering the columns `[reparacionesId]` on the table `Moto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Moto_reparacionesId_key" ON "Moto"("reparacionesId");
