/*
  Warnings:

  - You are about to drop the column `number` on the `Enneagram` table. All the data in the column will be lost.
  - Added the required column `type` to the `Enneagram` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enneagram" DROP COLUMN "number",
ADD COLUMN     "type" INTEGER NOT NULL;
