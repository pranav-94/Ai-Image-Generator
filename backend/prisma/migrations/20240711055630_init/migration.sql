-- CreateTable
CREATE TABLE "signUp" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "promptData" (
    "id" SERIAL NOT NULL,
    "promptUser" TEXT NOT NULL DEFAULT 'default_value',
    "promptText" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "signUp_id_key" ON "signUp"("id");

-- CreateIndex
CREATE UNIQUE INDEX "signUp_username_key" ON "signUp"("username");

-- CreateIndex
CREATE UNIQUE INDEX "signUp_email_key" ON "signUp"("email");

-- CreateIndex
CREATE UNIQUE INDEX "signUp_password_key" ON "signUp"("password");

-- CreateIndex
CREATE UNIQUE INDEX "promptData_id_key" ON "promptData"("id");
