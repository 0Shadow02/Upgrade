/*
  Warnings:

  - You are about to drop the `Signin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Signup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Signin";

-- DropTable
DROP TABLE "Signup";

-- CreateTable
CREATE TABLE "UserData" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserData_username_key" ON "UserData"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserData_firstName_key" ON "UserData"("firstName");
