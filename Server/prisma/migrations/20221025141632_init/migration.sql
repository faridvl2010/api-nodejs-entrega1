/*
  Warnings:

  - Added the required column `EMAIL` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `EMAIL` VARCHAR(50) NOT NULL;
