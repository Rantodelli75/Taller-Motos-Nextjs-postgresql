-- CreateTable
CREATE TABLE "Contacto" (
    "Id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Contacto_pkey" PRIMARY KEY ("Id")
);
