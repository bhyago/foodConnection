-- CreateTable
CREATE TABLE "productionchain" (
    "id" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,
    "dateBegin" TIMESTAMP(3) NOT NULL,
    "dateEnd" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT (timezone('UTC'::text, now()))::timestamp(0) without time zone,
    "updatedAt" TIMESTAMP(3),
    "id_food" TEXT NOT NULL,

    CONSTRAINT "productionchain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredient_productionChain" (
    "companyId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,

    CONSTRAINT "ingredient_productionChain_pkey" PRIMARY KEY ("companyId","ingredientId")
);

-- CreateTable
CREATE TABLE "provider_productionChain" (
    "companyId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,

    CONSTRAINT "provider_productionChain_pkey" PRIMARY KEY ("companyId","providerId")
);

-- AddForeignKey
ALTER TABLE "productionchain" ADD CONSTRAINT "productionchain_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productionchain" ADD CONSTRAINT "productionchain_id_food_fkey" FOREIGN KEY ("id_food") REFERENCES "food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredient_productionChain" ADD CONSTRAINT "ingredient_productionChain_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredient_productionChain" ADD CONSTRAINT "ingredient_productionChain_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provider_productionChain" ADD CONSTRAINT "provider_productionChain_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provider_productionChain" ADD CONSTRAINT "provider_productionChain_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
