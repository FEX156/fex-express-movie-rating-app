-- CreateTable
CREATE TABLE "Movie_users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Movie_users_pkey" PRIMARY KEY ("id")
);
