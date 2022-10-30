-- CreateTable
CREATE TABLE "provider" (
    "id" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "area" VARCHAR(100),
    "active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT (timezone('UTC'::text, now()))::timestamp(0) without time zone,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "provider_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "provider_cnpj_key" ON "provider"("cnpj");

-- AddForeignKey
ALTER TABLE "provider" ADD CONSTRAINT "provider_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
