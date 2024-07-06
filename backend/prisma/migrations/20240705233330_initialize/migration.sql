-- CreateTable
CREATE TABLE "signUp" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "signUp_id_key" ON "signUp"("id");
