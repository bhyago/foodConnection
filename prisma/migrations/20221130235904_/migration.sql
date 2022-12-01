/*
  Warnings:

  - Added the required column `active` to the `dishproductionchain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dishproductionchain" ADD COLUMN     "active" BOOLEAN NOT NULL;
