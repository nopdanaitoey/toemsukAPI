import axios from "axios";
import * as dotenv from "dotenv";
import signRequest from "../utils/sha256";
const LazadaAPI = require("lazada-open-platform-sdk");
import express, { Application, Request, Response, request } from "express";

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

export const refreshTokenLazada = async (): Promise<any> => {
  const payload = {
    filter: "all", // หรือค่า ProductFilter อื่น ๆ ที่ต้องการใช้
    // คุณสามารถเพิ่มคุณสมบัติอื่น ๆ ตามต้องการ
  };

  bLazadaAPI
    .getProducts(payload)
    .then((res: any) => {
      return JSON.stringify(res, null, 4);
    })
    .catch((err: any) => {
      //   console.log(JSON.stringify(err, null, 4));
    });
};

export const getTokenLazada = async (): Promise<string> => {
  const params = {
    code: code,
  };

  aLazadaAPI
    .generateAccessToken(params)
    .then((response: Response) =>
      console.log(JSON.stringify(response, null, 4))
    )
    .catch((error: any) => console.log(JSON.stringify(error, null, 4)));
  //   aLazadaAPI
  //     .generateAccessToken({ code: "auth_code" })
  //     .then((response: any) => {
  //       const { access_token } = response; // JSON data from Lazada's API
  //       console.log(access_token);
  //     });
  // for API action that require authorization, you must set the accessToken first
  //   aLazadaAPI.accessToken = "some_access_token";
  //   aLazadaAPI.getShipmentProviders().then((response: any) => {
  //     // JSON data from Lazada's API
  //   });
  return "s";
};
