import express, { Application, Request, Response, request } from "express";
import * as LazadaService from "./lazada.service";
const LazadaAPI = require("lazada-open-platform-sdk");
// import LazadaAPI from "lazada-open-platform-sdk";

export const lazadaRouter = express.Router();
import * as dotenv from "dotenv";
var timeStamp = Math.round(+new Date() / 1000);
var sign_method = process.env.LAZADA_SIGN_METHOD as string;
var app_key = process.env.LAZADA_APP_KEY as string;
var lazada_api = process.env.LAZADA_API as string;
var code = process.env.LAZADA_CODE as string;
var app_secret = process.env.LAZADA_APP_SECRET as string;
const aLazadaAPI = new LazadaAPI(app_key, app_secret, "THAILAND");
const bLazadaAPI = new LazadaAPI(
  app_key,
  app_secret,
  "THAILAND",
  "50000901716iQplqbzqF9ECrCmwV156c25ddDikSn2IQxHfb8xxdQOZrQP14RhJM"
);
import { LazadaProduct } from "../Product/product.type";
lazadaRouter.get("/", async (request: Request, respone: Response) => {
  try {
    const payload = {
      filter: "all", // หรือค่า ProductFilter อื่น ๆ ที่ต้องการใช้
      // คุณสามารถเพิ่มคุณสมบัติอื่น ๆ ตามต้องการ
    };
    bLazadaAPI
      .getProducts(payload)
      .then((res: any) => {
        const lazadaProducts: LazadaProduct[] = res.data.products.map(
          (product: any) => ({
            ...res,
          })
        );
        return respone.status(200).json(lazadaProducts[0].data.products);
      })
      .catch((err: any) => {
        //   console.log(JSON.stringify(err, null, 4));
      });
  } catch (err: any) {
    console.log("aa");
    return respone.status(500).json(err.message);
  }
});
// lazadaRouter.get("/category/", async (request: Request, respone: Response) => {
//   try {
//     const payload = {
//       filter: "all", // หรือค่า ProductFilter อื่น ๆ ที่ต้องการใช้
//       // คุณสามารถเพิ่มคุณสมบัติอื่น ๆ ตามต้องการ
//     };
//     bLazadaAPI
//       . ()
//       .then((res: any) => {
//         return respone.status(200).json(res);
//       })
//       .catch((err: any) => {
//         //   console.log(JSON.stringify(err, null, 4));
//       });
//   } catch (err: any) {
//     console.log("aa");
//     return respone.status(500).json(err.message);
//   }
// });
