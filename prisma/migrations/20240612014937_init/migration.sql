-- CreateTable
CREATE TABLE "usuario" (
    "Id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cedula" INTEGER NOT NULL,
    "n_telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "clave" TEXT NOT NULL,
    "fecha_cracion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_cedula_key" ON "usuario"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");
