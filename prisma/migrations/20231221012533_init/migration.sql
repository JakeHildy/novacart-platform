-- CreateTable
CREATE TABLE `Tenant` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `tenant` VARCHAR(50) NOT NULL,
    `paymentType` ENUM('Trial', 'Paying', 'Internal') NOT NULL DEFAULT 'Trial',
    `planType` ENUM('Demo', 'Basic', 'Pro', 'Enterprise', 'Custom') NOT NULL DEFAULT 'Demo',

    UNIQUE INDEX `Tenant_tenant_key`(`tenant`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
