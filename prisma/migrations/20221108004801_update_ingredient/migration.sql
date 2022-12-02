/*
  Warnings:

  - You are about to drop the column `vegan` on the `IngredientAlergic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "vegan" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "IngredientAlergic" DROP COLUMN "vegan";
