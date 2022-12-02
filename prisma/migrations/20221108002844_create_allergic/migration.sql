-- CreateTable
CREATE TABLE "allergic" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "allergic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IngredientAlergic" (
    "ingredientId" TEXT NOT NULL,
    "allergicId" TEXT NOT NULL,
    "vegan" BOOLEAN NOT NULL,

    CONSTRAINT "IngredientAlergic_pkey" PRIMARY KEY ("ingredientId","allergicId")
);

-- AddForeignKey
ALTER TABLE "IngredientAlergic" ADD CONSTRAINT "IngredientAlergic_allergicId_fkey" FOREIGN KEY ("allergicId") REFERENCES "allergic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientAlergic" ADD CONSTRAINT "IngredientAlergic_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
