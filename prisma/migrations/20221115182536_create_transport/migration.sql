-- CreateTable
CREATE TABLE "transport" (
    "id" TEXT NOT NULL,
    "fabricationId" TEXT NOT NULL,
    "origin" VARCHAR(100) NOT NULL,
    "destiny" VARCHAR(100) NOT NULL,
    "startDateTime" TIMESTAMP(3) NOT NULL,
    "endDateTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "intervention" (
    "id" TEXT NOT NULL,
    "productionChainId" TEXT NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "startDateTime" TIMESTAMP(3) NOT NULL,
    "endDateTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "intervention_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "transport_fabricationId_key" ON "transport"("fabricationId");

-- AddForeignKey
ALTER TABLE "transport" ADD CONSTRAINT "transport_fabricationId_fkey" FOREIGN KEY ("fabricationId") REFERENCES "fabrication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "intervention" ADD CONSTRAINT "intervention_productionChainId_fkey" FOREIGN KEY ("productionChainId") REFERENCES "productionchain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
