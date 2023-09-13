import express, { Request, Response } from "express";
import * as IndexService from "./index.service";
import signRequest from "../utils/sha256";

export const indexRouter = express.Router();

indexRouter.get("/", async (request: Request, response: Response) => {
  try {
    const imageName = request.query.imageName as string;
    if (!imageName) {
      return response
        .status(400)
        .json({ error: "Missing imageName parameter" });
    }
    const imagePath = await IndexService.getImages(imageName);
    console.log(imagePath);
    response.sendFile(imagePath);
  } catch (err: any) {
    return response.status(500).json({ error: err.message });
  }
});
indexRouter.get("/ss", async (request: Request, response: Response) => {
  try {
    // Example usage:
    const parameters = {
      param1: "value1",
      param2: "value2",
    };

    const body = "request body";
    const appSecret = "yourAppSecret";
    const signMethod = "SHA256";
    const apiName = "exampleApi";

    const signature = signRequest(
      parameters,
      body,
      appSecret,
      signMethod,
      apiName
    );
    console.log(signature);

    response.status(200).json(signature);
  } catch (err: any) {
    return response.status(500).json({ error: err.message });
  }
});
