/*
  Warnings:

  - Added the required column `role` to the `TenantAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TenantAccount` ADD COLUMN `role` ENUM('Data', 'AdminOwner', 'AdminUser', 'Basic', 'Standard') NOT NULL;
