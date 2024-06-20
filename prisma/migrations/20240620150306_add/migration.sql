/*
  Warnings:

  - You are about to drop the column `descripcion` on the `Moto` table. All the data in the column will be lost.
  - You are about to drop the column `lista_reparaciones` on the `Moto` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[placa]` on the table `Moto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kilometraje` to the `Moto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placa` to the `Moto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Moto" DROP COLUMN "descripcion",
DROP COLUMN "lista_reparaciones",
ADD COLUMN     "kilometraje" INTEGER NOT NULL,
ADD COLUMN     "placa" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "reparaciones" (
    "Id" SERIAL NOT NULL,
    "lista_reparaciones" "Lista_Reparaciones" NOT NULL,

    CONSTRAINT "reparaciones_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Moto_placa_key" ON "Moto"("placa");
