/*
  Warnings:

  - You are about to drop the `Movie_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Movie_users";

-- CreateTable
CREATE TABLE "movie_users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "movie_users_pkey" PRIMARY KEY ("id")
);
