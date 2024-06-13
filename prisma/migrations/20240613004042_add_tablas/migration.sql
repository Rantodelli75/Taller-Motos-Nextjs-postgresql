/*
  Warnings:

  - Added the required column `rol` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "rol" AS ENUM ('admin', 'cliente', 'empleado');

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "rol" "rol" NOT NULL;
