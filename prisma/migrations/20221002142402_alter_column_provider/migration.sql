-- DropIndex
DROP INDEX "provider_cnpj_key";

-- AlterTable
ALTER TABLE "provider" ALTER COLUMN "cnpj" SET DATA TYPE TEXT;
