/*
  Warnings:

  - The primary key for the `ingredient_productionChain` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `companyId` on the `ingredient_productionChain` table. All the data in the column will be lost.
  - The primary key for the `provider_productionChain` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `companyId` on the `provider_productionChain` table. All the data in the column will be lost.
  - Added the required column `productionChainId` to the `ingredient_productionChain` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productionChainId` to the `provider_productionChain` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ingredient_productionChain" DROP CONSTRAINT "ingredient_productionChain_companyId_fkey";

-- DropForeignKey
ALTER TABLE "provider_productionChain" DROP CONSTRAINT "provider_productionChain_companyId_fkey";

-- AlterTable
ALTER TABLE "ingredient_productionChain" DROP CONSTRAINT "ingredient_productionChain_pkey",
DROP COLUMN "companyId",
ADD COLUMN     "productionChainId" TEXT NOT NULL,
ADD CONSTRAINT "ingredient_productionChain_pkey" PRIMARY KEY ("productionChainId", "ingredientId");

-- AlterTable
ALTER TABLE "productionchain" ALTER COLUMN "quantity" DROP NOT NULL,
ALTER COLUMN "dateEnd" DROP NOT NULL;

-- AlterTable
ALTER TABLE "provider_productionChain" DROP CONSTRAINT "provider_productionChain_pkey",
DROP COLUMN "companyId",
ADD COLUMN     "productionChainId" TEXT NOT NULL,
ADD CONSTRAINT "provider_productionChain_pkey" PRIMARY KEY ("productionChainId", "providerId");

-- AddForeignKey
ALTER TABLE "ingredient_productionChain" ADD CONSTRAINT "ingredient_productionChain_productionChainId_fkey" FOREIGN KEY ("productionChainId") REFERENCES "productionchain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provider_productionChain" ADD CONSTRAINT "provider_productionChain_productionChainId_fkey" FOREIGN KEY ("productionChainId") REFERENCES "productionchain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
