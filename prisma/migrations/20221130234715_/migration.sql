/*
  Warnings:

  - You are about to drop the column `dishProductionChainId` on the `BashDishProductionChain` table. All the data in the column will be lost.
  - Added the required column `dishId` to the `BashDishProductionChain` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `dishproductionchain` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BashDishProductionChain" DROP CONSTRAINT "BashDishProductionChain_dishProductionChainId_fkey";

-- AlterTable
ALTER TABLE "BashDishProductionChain" DROP COLUMN "dishProductionChainId",
ADD COLUMN     "dishId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "dishproductionchain" ADD COLUMN     "companyId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "BashDishProductionChain" ADD CONSTRAINT "BashDishProductionChain_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "dishproductionchain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
