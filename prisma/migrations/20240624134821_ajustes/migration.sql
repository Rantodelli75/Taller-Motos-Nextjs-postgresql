/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId]` on the table `Moto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[empleadoId]` on the table `Reparaciones` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[serviciosId]` on the table `Reparaciones` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Moto_usuarioId_key" ON "Moto"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Reparaciones_empleadoId_key" ON "Reparaciones"("empleadoId");

-- CreateIndex
CREATE UNIQUE INDEX "Reparaciones_serviciosId_key" ON "Reparaciones"("serviciosId");
