/*
  Warnings:

  - You are about to drop the `IngredientAlergic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "IngredientAlergic" DROP CONSTRAINT "IngredientAlergic_allergicId_fkey";

-- DropForeignKey
ALTER TABLE "IngredientAlergic" DROP CONSTRAINT "IngredientAlergic_ingredientId_fkey";

-- DropTable
DROP TABLE "IngredientAlergic";

-- CreateTable
CREATE TABLE "ingredientallergic" (
    "ingredientId" TEXT NOT NULL,
    "allergicId" TEXT NOT NULL,

    CONSTRAINT "ingredientallergic_pkey" PRIMARY KEY ("ingredientId","allergicId")
);

-- AddForeignKey
ALTER TABLE "ingredientallergic" ADD CONSTRAINT "ingredientallergic_allergicId_fkey" FOREIGN KEY ("allergicId") REFERENCES "allergic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredientallergic" ADD CONSTRAINT "ingredientallergic_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
