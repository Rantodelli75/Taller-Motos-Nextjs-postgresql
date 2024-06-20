/*
  Warnings:

  - You are about to drop the `reparaciones` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `serviciosId` to the `Reparaciones` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reparaciones" ADD COLUMN     "serviciosId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "reparaciones";

-- CreateTable
CREATE TABLE "selec_servicios" (
    "Id" SERIAL NOT NULL,
    "lista_reparaciones" "Lista_Reparaciones" NOT NULL,

    CONSTRAINT "selec_servicios_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Reparaciones" ADD CONSTRAINT "Reparaciones_serviciosId_fkey" FOREIGN KEY ("serviciosId") REFERENCES "selec_servicios"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
