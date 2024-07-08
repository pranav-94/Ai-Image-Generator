/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `signUp` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `signUp` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "promptData" ADD COLUMN     "promptUser" TEXT NOT NULL DEFAULT 'default_value';

-- CreateIndex
CREATE UNIQUE INDEX "signUp_username_key" ON "signUp"("username");

-- CreateIndex
CREATE UNIQUE INDEX "signUp_password_key" ON "signUp"("password");
