/*
  Warnings:

  - Added the required column `companyId` to the `BashDishProductionChain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BashDishProductionChain" ADD COLUMN     "companyId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "dishproductionchain" ADD CONSTRAINT "dishproductionchain_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BashDishProductionChain" ADD CONSTRAINT "BashDishProductionChain_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
