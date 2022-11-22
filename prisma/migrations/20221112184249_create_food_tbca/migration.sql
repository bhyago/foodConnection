-- CreateTable
CREATE TABLE "foodtbca" (
    "id" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "unity" VARCHAR(3) NOT NULL,
    "valueBy100g" INTEGER NOT NULL,

    CONSTRAINT "foodtbca_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "foodtbca" ADD CONSTRAINT "foodtbca_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
