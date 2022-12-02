/*
  Warnings:

  - Added the required column `type` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company" ADD COLUMN     "type" VARCHAR(12) NOT NULL;

-- AlterTable
ALTER TABLE "companyaddress" ALTER COLUMN "created_at" SET DEFAULT (timezone('UTC'::text, now()))::timestamp(0) without time zone,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(6);
