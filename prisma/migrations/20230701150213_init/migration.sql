-- CreateTable
CREATE TABLE "TodoList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "title" TEXT
);

-- CreateTable
CREATE TABLE "TodoItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "isChecked" BOOLEAN NOT NULL DEFAULT false,
    "todoListId" INTEGER NOT NULL,
    CONSTRAINT "TodoItem_todoListId_fkey" FOREIGN KEY ("todoListId") REFERENCES "TodoList" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "TodoList_code_key" ON "TodoList"("code");
