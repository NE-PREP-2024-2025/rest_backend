/*
  Warnings:

  - Changed the type of `vehicleYear` on the `Vehicle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "vehicleYear",
ADD COLUMN     "vehicleYear" INTEGER NOT NULL;
