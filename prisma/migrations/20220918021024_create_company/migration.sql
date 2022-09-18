-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "legalname" VARCHAR(100) NOT NULL,
    "descriptiom" VARCHAR(500),
    "logo" TEXT,
    "cnpj" VARCHAR(14) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(32) NOT NULL,
    "active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companyaddress" (
    "id" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,
    "zipcode" VARCHAR(8),
    "street" VARCHAR(150),
    "number" VARCHAR(10),
    "complement" VARCHAR(50),
    "neighborhood" VARCHAR(100),
    "city" VARCHAR(50),
    "state" VARCHAR(100),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companyaddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_cnpj_key" ON "company"("cnpj");

-- AddForeignKey
ALTER TABLE "companyaddress" ADD CONSTRAINT "companyaddress_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
