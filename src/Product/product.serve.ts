import { Product, ProductDetail } from "@prisma/client";
import { db } from "../utils/db.server";

export const getProductDetailById = async (
  langId: number,
  productId: number
): Promise<ProductDetail | null> => {
  const productDetail = await db.productDetail.findFirst({
    where: {
      productId: productId,
    },
    include: {
      translation: {
        where: {
          languageId: langId,
        },
      },
      Product: true,
    },
  });
  return productDetail;
};
