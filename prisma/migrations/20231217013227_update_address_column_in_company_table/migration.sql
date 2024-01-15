-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "website" TEXT,
    "careerPage" TEXT,
    "source" TEXT,
    "logo" TEXT,
    "cityId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Company_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Company_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Company" ("address", "careerPage", "cityId", "id", "logo", "name", "source", "userId", "website") SELECT "address", "careerPage", "cityId", "id", "logo", "name", "source", "userId", "website" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
