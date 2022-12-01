/*
  Warnings:

  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `componentTBCAId` to the `foodtbca` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_id_company_fkey";

-- DropForeignKey
ALTER TABLE "ingredientallergic" DROP CONSTRAINT "ingredientallergic_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "ingredientproductionchain" DROP CONSTRAINT "ingredientproductionchain_ingredientId_fkey";

-- AlterTable
ALTER TABLE "foodtbca" ADD COLUMN     "componentTBCAId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Ingredient";

-- CreateTable
CREATE TABLE "componentTBCA" (
    "id" TEXT NOT NULL,
    "componentName" VARCHAR(50) NOT NULL,

    CONSTRAINT "componentTBCA_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredient" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500),
    "vegan" BOOLEAN NOT NULL DEFAULT false,
    "id_company" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT (timezone('UTC'::text, now()))::timestamp(0) without time zone,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "ingredient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "foodtbca" ADD CONSTRAINT "foodtbca_componentTBCAId_fkey" FOREIGN KEY ("componentTBCAId") REFERENCES "componentTBCA"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredientallergic" ADD CONSTRAINT "ingredientallergic_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredientproductionchain" ADD CONSTRAINT "ingredientproductionchain_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
