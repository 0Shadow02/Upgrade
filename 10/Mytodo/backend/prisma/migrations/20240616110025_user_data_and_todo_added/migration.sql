/*
  Warnings:

  - Added the required column `userId` to the `Mytodo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mytodo" ADD COLUMN     "userId" INTEGER NOT NULL;
