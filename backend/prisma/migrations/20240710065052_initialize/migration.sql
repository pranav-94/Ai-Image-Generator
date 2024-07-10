/*
  Warnings:

  - Added the required column `mimeType` to the `promptData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "promptData" ADD COLUMN     "mimeType" TEXT NOT NULL;
