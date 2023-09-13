/*
  Warnings:

  - Added the required column `languageId` to the `ProductDetailTranslation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ProductDetailTranslation` ADD COLUMN `languageId` INTEGER NOT NULL;
