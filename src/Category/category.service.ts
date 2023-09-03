import { db } from "../utils/db.server";
// import { Category, ContractTranslation } from "./category.type";
import { Category, Product } from "@prisma/client";

export const getListCategoryByLangId = async (
  langId: number
): Promise<Category[]> => {
  const categoriesWithTranslation = await db.category.findMany({
    include: {
      translations: {
        where: {
          languageId: langId,
        },
      },
    },
  });

  return categoriesWithTranslation;
};

export const getProductByCategoryIdAndLangId = async (
  categoryId: number,
  langId: number
): Promise<Product[]> => {
  console.log(categoryId);
  console.log(langId);
  const productWithTranslation = await db.product.findMany({
    where: {
      categoryId: categoryId,
    },
    include: {
      translations: {
        where: {
          languageId: langId,
        },
      },
    },
  });
  console.log(productWithTranslation[0]);
  return productWithTranslation;
};
