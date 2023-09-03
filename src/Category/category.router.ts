import express, { Application, Request, Response, request } from "express";
import * as CategoryService from "./category.service";
export const categoryRouter = express.Router();


const baseURL = "http://141.98.16.110:8080/?imageName=";
// const baseURL = "http://localhost:8080/?imageName=";

categoryRouter.get("/:id", async (request: Request, respone: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    const category = await CategoryService.getListCategoryByLangId(id);
    const categoriesWithCompleteImageURL = category.map((category) => ({
      ...category,
      imgUrl: baseURL + category.imgUrl,
    }));

    return respone.status(200).json(categoriesWithCompleteImageURL);
  } catch (err: any) {
    return respone.status(500).json(err.message);
  }
});

categoryRouter.get(
  "/:categoryId/:langId",
  async (request: Request, respone: Response) => {
    const categoryId: number = parseInt(request.params.categoryId, 10);
    const langId: number = parseInt(request.params.langId, 10);
    try {
      const product = await CategoryService.getProductByCategoryIdAndLangId(
        categoryId,
        langId
      );

      const productWithImgurl = product.map((product) => ({
        ...product,
        imgUrl: baseURL + product.imgUrl,
      }));

      return respone.status(200).json(productWithImgurl);
    } catch (err: any) {
      return respone.status(500).json(err.message);
    }
  }
);
