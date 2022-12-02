/*
  Warnings:

  - You are about to drop the column `companyId` on the `productiontype` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "productiontype" DROP CONSTRAINT "productiontype_companyId_fkey";

-- AlterTable
ALTER TABLE "productiontype" DROP COLUMN "companyId";
