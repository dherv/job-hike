/*
  Warnings:

  - You are about to drop the column `applicationDate` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `applicationMethod` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `applicationStatus` on the `Job` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    CONSTRAINT "Application_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "contactInformation" TEXT,
    "description" TEXT,
    "notes" TEXT,
    "url" TEXT,
    "source" TEXT,
    "companyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Job_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Job" ("companyId", "contactInformation", "description", "id", "notes", "source", "title", "url", "userId") SELECT "companyId", "contactInformation", "description", "id", "notes", "source", "title", "url", "userId" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Application_jobId_key" ON "Application"("jobId");
