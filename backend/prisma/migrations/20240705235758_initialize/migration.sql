-- CreateTable
CREATE TABLE "promptData" (
    "id" SERIAL NOT NULL,
    "promptText" TEXT NOT NULL,
    "promptUrl" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "promptData_id_key" ON "promptData"("id");
