/*
  Warnings:

  - You are about to drop the column `id_company` on the `productionchain` table. All the data in the column will be lost.
  - You are about to drop the column `id_food` on the `productionchain` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `productionchain` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodId` to the `productionchain` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "productionchain" DROP CONSTRAINT "productionchain_id_company_fkey";

-- DropForeignKey
ALTER TABLE "productionchain" DROP CONSTRAINT "productionchain_id_food_fkey";

-- AlterTable
ALTER TABLE "productionchain" DROP COLUMN "id_company",
DROP COLUMN "id_food",
ADD COLUMN     "companyId" TEXT NOT NULL,
ADD COLUMN     "foodId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "productionchain" ADD CONSTRAINT "productionchain_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productionchain" ADD CONSTRAINT "productionchain_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
