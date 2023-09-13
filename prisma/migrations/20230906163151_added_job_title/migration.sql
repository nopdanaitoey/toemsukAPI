-- CreateTable
CREATE TABLE `ProductDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `imgUrl` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductDetailTranslation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productDetailId` INTEGER NOT NULL,
    `discription` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductDetail` ADD CONSTRAINT `ProductDetail_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductDetailTranslation` ADD CONSTRAINT `ProductDetailTranslation_productDetailId_fkey` FOREIGN KEY (`productDetailId`) REFERENCES `ProductDetail`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
