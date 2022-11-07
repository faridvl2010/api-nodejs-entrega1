/*
  Warnings:

  - Added the required column `CURRENT_DATA` to the `historic_usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PREV_DATA` to the `historic_usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `historic_usuario` ADD COLUMN `CURRENT_DATA` VARCHAR(200) NOT NULL,
    ADD COLUMN `PREV_DATA` VARCHAR(200) NOT NULL;
