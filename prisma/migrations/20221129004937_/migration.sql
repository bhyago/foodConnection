/*
  Warnings:

  - Added the required column `typeId` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company" ADD COLUMN     "typeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "companytype" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "companytype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dishproductionchain" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500) NOT NULL,

    CONSTRAINT "dishproductionchain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BashDishProductionChain" (
    "id" TEXT NOT NULL,
    "dishProductionChainId" TEXT NOT NULL,
    "productionChainId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "BashDishProductionChain_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "companytype"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BashDishProductionChain" ADD CONSTRAINT "BashDishProductionChain_dishProductionChainId_fkey" FOREIGN KEY ("dishProductionChainId") REFERENCES "dishproductionchain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BashDishProductionChain" ADD CONSTRAINT "BashDishProductionChain_productionChainId_fkey" FOREIGN KEY ("productionChainId") REFERENCES "productionchain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
