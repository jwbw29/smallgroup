-- DropIndex
DROP INDEX "Event_groupId_key";

-- DropIndex
DROP INDEX "Event_semesterId_key";

-- DropIndex
DROP INDEX "Event_yearId_key";

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "groupId" SET DEFAULT 1,
ALTER COLUMN "semesterId" SET DEFAULT 1,
ALTER COLUMN "yearId" SET DEFAULT 1;
