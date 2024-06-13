/*
  Warnings:

  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Lista_Reparaciones" AS ENUM ('mantenimiento_General', 'combio_aceite', 'cambio_cauchos', 'parche_tripa', 'cambio_amortiguador', 'cambio_monoshock', 'cambio_rodamiento', 'cambio_cadena', 'cambio_corona_d', 'cambio_corona_t', 'cambio_bombillo_principal', 'cambio_bombillo_cruce', 'cambio_bombillo_freno', 'cambio_parrillera', 'ajuste_general', 'cambio_bateria', 'revision_electrica', 'cambio_pastillas_d', 'cambio_pastillas_t', 'cambio_tambor_d', 'cambio_tambor_t');

-- DropTable
DROP TABLE "usuario";

-- CreateTable
CREATE TABLE "Usuario" (
    "Id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cedula" INTEGER NOT NULL,
    "n_telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "clave" TEXT NOT NULL,
    "fecha_cracion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Empleado" (
    "Id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cedula" INTEGER NOT NULL,
    "n_telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "clave" TEXT NOT NULL,
    "fecha_cracion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Moto" (
    "Id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "lista_reparaciones" "Lista_Reparaciones" NOT NULL,
    "descripcion" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Moto_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cedula_key" ON "Usuario"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_cedula_key" ON "Empleado"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_email_key" ON "Empleado"("email");

-- AddForeignKey
ALTER TABLE "Moto" ADD CONSTRAINT "Moto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
