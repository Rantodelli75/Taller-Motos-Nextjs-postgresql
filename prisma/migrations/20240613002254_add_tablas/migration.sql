/*
  Warnings:

  - Added the required column `reparacionesId` to the `Moto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Moto" ADD COLUMN     "reparacionesId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Reparaciones" (
    "Id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "empleadoId" INTEGER NOT NULL,

    CONSTRAINT "Reparaciones_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Moto" ADD CONSTRAINT "Moto_reparacionesId_fkey" FOREIGN KEY ("reparacionesId") REFERENCES "Reparaciones"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reparaciones" ADD CONSTRAINT "Reparaciones_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "Empleado"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
