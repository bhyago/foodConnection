/*
  Warnings:

  - You are about to drop the column `dateBegin` on the `productionchain` table. All the data in the column will be lost.
  - You are about to drop the column `dateEnd` on the `productionchain` table. All the data in the column will be lost.
  - Added the required column `startDateTime` to the `productionchain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "productionchain" DROP COLUMN "dateBegin",
DROP COLUMN "dateEnd",
ADD COLUMN     "endDateTime" TIMESTAMP(3),
ADD COLUMN     "startDateTime" TIMESTAMP(3) NOT NULL;
