-- CreateTable
CREATE TABLE "Facturas" (
    "Id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Facturas_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Facturas_usuarioId_key" ON "Facturas"("usuarioId");

-- AddForeignKey
ALTER TABLE "Facturas" ADD CONSTRAINT "Facturas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
