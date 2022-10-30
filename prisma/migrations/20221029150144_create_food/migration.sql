/*
  Warnings:

  - Added the required column `email` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT (timezone('UTC'::text, now()))::timestamp(0) without time zone,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "survery" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT (timezone('UTC'::text, now()))::timestamp(0) without time zone,

    CONSTRAINT "survery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "surverysclients" (
    "id" TEXT NOT NULL,
    "id_client" TEXT NOT NULL,
    "id_survery" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT (timezone('UTC'::text, now()))::timestamp(0) without time zone,

    CONSTRAINT "surverysclients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foodtype" (
    "id" TEXT NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    "id_company" TEXT NOT NULL,

    CONSTRAINT "foodtype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500),
    "id_foodtype" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT (timezone('UTC'::text, now()))::timestamp(0) without time zone,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "surverysclients" ADD CONSTRAINT "surverysclients_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "surverysclients" ADD CONSTRAINT "surverysclients_id_survery_fkey" FOREIGN KEY ("id_survery") REFERENCES "survery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foodtype" ADD CONSTRAINT "foodtype_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_id_foodtype_fkey" FOREIGN KEY ("id_foodtype") REFERENCES "foodtype"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
