/*
  Warnings:

  - You are about to drop the column `productiontypeId` on the `productionchain` table. All the data in the column will be lost.
  - Added the required column `productionTypeId` to the `productionchain` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "productionchain" DROP CONSTRAINT "productionchain_productiontypeId_fkey";

-- AlterTable
ALTER TABLE "productionchain" DROP COLUMN "productiontypeId",
ADD COLUMN     "productionTypeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "productionchain" ADD CONSTRAINT "productionchain_productionTypeId_fkey" FOREIGN KEY ("productionTypeId") REFERENCES "productiontype"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
