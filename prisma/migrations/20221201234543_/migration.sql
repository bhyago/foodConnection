/*
  Warnings:

  - You are about to drop the column `id_company` on the `foodtype` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "foodtype" DROP CONSTRAINT "foodtype_id_company_fkey";

-- AlterTable
ALTER TABLE "foodtype" DROP COLUMN "id_company";
