-- AlterTable
ALTER TABLE "company" ALTER COLUMN "created_at" SET DEFAULT (timezone('UTC'::text, now()))::timestamp(0) without time zone,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "companyaddress" ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMP(6);
