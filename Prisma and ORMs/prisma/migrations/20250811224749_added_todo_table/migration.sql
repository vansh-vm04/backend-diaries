-- CreateTable
CREATE TABLE "public"."Todo" (
    "id" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Todo_id_key" ON "public"."Todo"("id");
