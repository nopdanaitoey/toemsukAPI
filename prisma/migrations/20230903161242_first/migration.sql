-- CreateTable
CREATE TABLE `Lang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `langName` VARCHAR(191) NOT NULL,
    `lang` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Home` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(191) NOT NULL,
    `imgUrl` VARCHAR(191) NULL,
    `bgImgUrl` VARCHAR(191) NULL,
    `isDisplay` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HomeTranslation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `homdId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `discription` VARCHAR(191) NOT NULL,
    `langId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `fname` VARCHAR(191) NULL,
    `lname` VARCHAR(191) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContractTranslation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(191) NOT NULL,
    `discription` VARCHAR(191) NOT NULL,
    `langId` INTEGER NOT NULL,
    `isActive` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `imgUrl` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoryTranslation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryId` INTEGER NOT NULL,
    `languageId` INTEGER NOT NULL,
    `translatedName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `imgUrl` VARCHAR(191) NULL,
    `discount` DECIMAL(65, 30) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductTranslation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `languageId` INTEGER NOT NULL,
    `translatedName` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HomeTranslation` ADD CONSTRAINT `HomeTranslation_homdId_fkey` FOREIGN KEY (`homdId`) REFERENCES `Home`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoryTranslation` ADD CONSTRAINT `CategoryTranslation_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductTranslation` ADD CONSTRAINT `ProductTranslation_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
