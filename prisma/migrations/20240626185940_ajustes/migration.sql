-- CreateEnum
CREATE TYPE "Lista_Reparaciones" AS ENUM ('mantenimiento_General', 'combio_aceite', 'cambio_cauchos', 'parche_tripa', 'cambio_amortiguador', 'cambio_monoshock', 'cambio_rodamiento', 'cambio_cadena', 'cambio_corona_d', 'cambio_corona_t', 'cambio_bombillo_principal', 'cambio_bombillo_cruce', 'cambio_bombillo_freno', 'cambio_parrillera', 'ajuste_general', 'cambio_bateria', 'revision_electrica', 'cambio_pastillas_d', 'cambio_pastillas_t', 'cambio_tambor_d', 'cambio_tambor_t');

-- CreateEnum
CREATE TYPE "rol" AS ENUM ('admin', 'cliente', 'empleado');

-- CreateTable
CREATE TABLE "Usuario" (
    "Id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "n_telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "rol" "rol" NOT NULL DEFAULT 'cliente',
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
    "rol" "rol" NOT NULL,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Moto" (
    "Id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "kilometraje" TEXT NOT NULL,
    "fecha_entrada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,
    "reparacionesId" INTEGER NOT NULL,

    CONSTRAINT "Moto_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "selec_servicios" (
    "Id" SERIAL NOT NULL,
    "lista_reparaciones" "Lista_Reparaciones" NOT NULL,

    CONSTRAINT "selec_servicios_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Reparaciones" (
    "Id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "empleadoId" INTEGER NOT NULL,
    "serviciosId" INTEGER NOT NULL,

    CONSTRAINT "Reparaciones_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Facturas" (
    "Id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,
    "reparacionesId" INTEGER NOT NULL,
    "motoId" INTEGER NOT NULL,

    CONSTRAINT "Facturas_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cedula_key" ON "Usuario"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_n_telefono_key" ON "Usuario"("n_telefono");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_cedula_key" ON "Empleado"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_email_key" ON "Empleado"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Moto_placa_key" ON "Moto"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Moto_usuarioId_key" ON "Moto"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Moto_reparacionesId_key" ON "Moto"("reparacionesId");

-- CreateIndex
CREATE UNIQUE INDEX "Reparaciones_empleadoId_key" ON "Reparaciones"("empleadoId");

-- CreateIndex
CREATE UNIQUE INDEX "Reparaciones_serviciosId_key" ON "Reparaciones"("serviciosId");

-- CreateIndex
CREATE UNIQUE INDEX "Facturas_usuarioId_key" ON "Facturas"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Facturas_reparacionesId_key" ON "Facturas"("reparacionesId");

-- CreateIndex
CREATE UNIQUE INDEX "Facturas_motoId_key" ON "Facturas"("motoId");

-- AddForeignKey
ALTER TABLE "Moto" ADD CONSTRAINT "Moto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Moto" ADD CONSTRAINT "Moto_reparacionesId_fkey" FOREIGN KEY ("reparacionesId") REFERENCES "Reparaciones"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reparaciones" ADD CONSTRAINT "Reparaciones_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "Empleado"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reparaciones" ADD CONSTRAINT "Reparaciones_serviciosId_fkey" FOREIGN KEY ("serviciosId") REFERENCES "selec_servicios"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facturas" ADD CONSTRAINT "Facturas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facturas" ADD CONSTRAINT "Facturas_reparacionesId_fkey" FOREIGN KEY ("reparacionesId") REFERENCES "Reparaciones"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facturas" ADD CONSTRAINT "Facturas_motoId_fkey" FOREIGN KEY ("motoId") REFERENCES "Moto"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
