/*
  Warnings:

  - Added the required column `password` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Account` ADD COLUMN `countryCode` VARCHAR(2) NULL,
    ADD COLUMN `firstName` VARCHAR(100) NULL,
    ADD COLUMN `isBlocked` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isMegaAdmin` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `lastName` VARCHAR(100) NULL,
    ADD COLUMN `password` VARCHAR(100) NOT NULL,
    ADD COLUMN `passwordUpdatedAt` DATETIME(3) NULL,
    ADD COLUMN `phone` VARCHAR(50) NULL,
    ADD COLUMN `resetPasswordId` VARCHAR(191) NULL;
