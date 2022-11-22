/*
  Warnings:

  - You are about to drop the `provider_productionChain` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productiontypeId` to the `productionchain` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "provider_productionChain" DROP CONSTRAINT "provider_productionChain_productionChainId_fkey";

-- DropForeignKey
ALTER TABLE "provider_productionChain" DROP CONSTRAINT "provider_productionChain_providerId_fkey";

-- AlterTable
ALTER TABLE "productionchain" ADD COLUMN     "productiontypeId" TEXT NOT NULL;

-- DropTable
DROP TABLE "provider_productionChain";

-- CreateTable
CREATE TABLE "productiontype" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "productiontype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provider_productionchain" (
    "productionChainId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,

    CONSTRAINT "provider_productionchain_pkey" PRIMARY KEY ("productionChainId","providerId")
);

-- AddForeignKey
ALTER TABLE "productiontype" ADD CONSTRAINT "productiontype_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productionchain" ADD CONSTRAINT "productionchain_productiontypeId_fkey" FOREIGN KEY ("productiontypeId") REFERENCES "productiontype"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provider_productionchain" ADD CONSTRAINT "provider_productionchain_productionChainId_fkey" FOREIGN KEY ("productionChainId") REFERENCES "productionchain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provider_productionchain" ADD CONSTRAINT "provider_productionchain_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
