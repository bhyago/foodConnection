-- CreateTable
CREATE TABLE "fabrication" (
    "id" TEXT NOT NULL,
    "productionChainId" TEXT NOT NULL,
    "batch" TEXT NOT NULL,
    "fabricationDate" TIMESTAMP(3) NOT NULL,
    "validadeDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fabrication_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fabrication" ADD CONSTRAINT "fabrication_productionChainId_fkey" FOREIGN KEY ("productionChainId") REFERENCES "productionchain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
