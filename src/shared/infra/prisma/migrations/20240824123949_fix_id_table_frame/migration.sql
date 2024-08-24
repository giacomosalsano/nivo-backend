/*
  Warnings:

  - The primary key for the `frames` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "frames" DROP CONSTRAINT "frames_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "frames_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "frames_id_seq";
