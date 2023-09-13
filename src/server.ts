import * as dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import path from "path";
import cors from "cors";

import { indexRouter } from "./Index/index.router";
import { categoryRouter } from "./Category/category.router";
import { productRouter } from "./Product/product.router";
import { lazadaRouter } from "./Lazada/lazada.router";

dotenv.config();
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/lazada", lazadaRouter);
app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Server Run!! ${PORT} `));
