/*
  Warnings:

  - A unique constraint covering the columns `[reparacionesId]` on the table `Facturas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[motoId]` on the table `Facturas` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `motoId` to the `Facturas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reparacionesId` to the `Facturas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Facturas" ADD COLUMN     "motoId" INTEGER NOT NULL,
ADD COLUMN     "reparacionesId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Facturas_reparacionesId_key" ON "Facturas"("reparacionesId");

-- CreateIndex
CREATE UNIQUE INDEX "Facturas_motoId_key" ON "Facturas"("motoId");

-- AddForeignKey
ALTER TABLE "Facturas" ADD CONSTRAINT "Facturas_reparacionesId_fkey" FOREIGN KEY ("reparacionesId") REFERENCES "Reparaciones"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facturas" ADD CONSTRAINT "Facturas_motoId_fkey" FOREIGN KEY ("motoId") REFERENCES "Moto"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
