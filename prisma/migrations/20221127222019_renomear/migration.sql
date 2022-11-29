/*
  Warnings:

  - You are about to drop the `ingredient_productionChain` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[foodId]` on the table `foodtbca` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ingredient_productionChain" DROP CONSTRAINT "ingredient_productionChain_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "ingredient_productionChain" DROP CONSTRAINT "ingredient_productionChain_productionChainId_fkey";

-- DropTable
DROP TABLE "ingredient_productionChain";

-- CreateTable
CREATE TABLE "ingredientproductionchain" (
    "productionChainId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,

    CONSTRAINT "ingredientproductionchain_pkey" PRIMARY KEY ("productionChainId","ingredientId")
);

-- CreateIndex
CREATE UNIQUE INDEX "foodtbca_foodId_key" ON "foodtbca"("foodId");

-- AddForeignKey
ALTER TABLE "ingredientproductionchain" ADD CONSTRAINT "ingredientproductionchain_productionChainId_fkey" FOREIGN KEY ("productionChainId") REFERENCES "productionchain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredientproductionchain" ADD CONSTRAINT "ingredientproductionchain_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
