/*
  Warnings:

  - You are about to drop the `clients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `deliveries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `deliveryman` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `survery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `surverysclients` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_client_fkey";

-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_deliveryman_fkey";

-- DropForeignKey
ALTER TABLE "surverysclients" DROP CONSTRAINT "surverysclients_id_client_fkey";

-- DropForeignKey
ALTER TABLE "surverysclients" DROP CONSTRAINT "surverysclients_id_survery_fkey";

-- DropTable
DROP TABLE "clients";

-- DropTable
DROP TABLE "deliveries";

-- DropTable
DROP TABLE "deliveryman";

-- DropTable
DROP TABLE "survery";

-- DropTable
DROP TABLE "surverysclients";

-- CreateTable
CREATE TABLE "companytoken" (
    "id" TEXT NOT NULL,
    "refreshToken" VARCHAR NOT NULL,
    "companyId" TEXT NOT NULL,
    "expiresDate" TIMESTAMP(6) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT (timezone('UTC'::text, now()))::timestamp(0) without time zone,

    CONSTRAINT "companytoken_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "companytoken" ADD CONSTRAINT "companytoken_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
