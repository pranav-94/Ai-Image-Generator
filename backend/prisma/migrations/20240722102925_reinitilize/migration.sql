-- CreateTable
CREATE TABLE "TextData" (
    "id" SERIAL NOT NULL,
    "promptUser" TEXT NOT NULL DEFAULT 'default_value',
    "promptText" TEXT NOT NULL,
    "promptResult" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TextData_id_key" ON "TextData"("id");
