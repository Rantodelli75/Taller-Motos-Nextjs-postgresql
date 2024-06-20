/*
  Warnings:

  - You are about to drop the column `apellido` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `clave` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `rol` to the `Empleado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Empleado" ADD COLUMN     "rol" "rol" NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "apellido",
DROP COLUMN "clave";
