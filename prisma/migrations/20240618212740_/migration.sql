/*
  Warnings:

  - A unique constraint covering the columns `[n_telefono]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `apellido` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "apellido" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_n_telefono_key" ON "Usuario"("n_telefono");
