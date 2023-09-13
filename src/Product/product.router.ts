import express, { Request, Response, request } from "express";
import * as ProductService from "./product.serve";

export const productRouter = express.Router();

productRouter.get(
  "/:productId/:langId",
  async (request: Request, respone: Response) => {
    const productId: number = parseInt(request.params.productId, 10);
    const langId: number = parseInt(request.params.langId, 10);
    try {
      const productDetail = await ProductService.getProductDetailById(
        langId,
        productId
      );

      return respone.status(200).json(productDetail);
    } catch (err: any) {
      return respone.status(500).json(err.message);
    }
  }
);
