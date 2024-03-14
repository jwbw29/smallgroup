/*
  Warnings:

  - The values [STUDY,SOCIAL,SPORT,VOLUNTEER] on the enum `GroupType` will be removed. If these variants are still used in the database, this will fail.
  - The values [SPRING,SUMMER,FALL,WINTER] on the enum `Semester` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "GroupType_new" AS ENUM ('Girls', 'Guys', 'All', 'Social');
ALTER TABLE "Event" ALTER COLUMN "group_type" TYPE "GroupType_new" USING ("group_type"::text::"GroupType_new");
ALTER TYPE "GroupType" RENAME TO "GroupType_old";
ALTER TYPE "GroupType_new" RENAME TO "GroupType";
DROP TYPE "GroupType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Semester_new" AS ENUM ('Spring', 'Summer', 'Fall', 'Winter');
ALTER TABLE "Event" ALTER COLUMN "semester" TYPE "Semester_new" USING ("semester"::text::"Semester_new");
ALTER TYPE "Semester" RENAME TO "Semester_old";
ALTER TYPE "Semester_new" RENAME TO "Semester";
DROP TYPE "Semester_old";
COMMIT;
