import express, { Request, Response } from "express";
import * as IndexService from "./index.service";

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
