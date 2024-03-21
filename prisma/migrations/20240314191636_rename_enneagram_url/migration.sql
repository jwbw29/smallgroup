/*
  Warnings:

  - You are about to drop the column `description` on the `Enneagram` table. All the data in the column will be lost.
  - Added the required column `url` to the `Enneagram` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enneagram" DROP COLUMN "description",
ADD COLUMN     "url" TEXT NOT NULL;
