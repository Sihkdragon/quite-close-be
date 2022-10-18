import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { router } from "./routes/routes";
import cors from "cors";

const app: Express = express();

const origin =
  process.env.NODE_ENV === "production" ? ["http://specify_here_your_site:3001"] : "*";

/**
 * @globalMiddleware
 */
dotenv.config();
app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin }));

const port = process.env.PORT || 8000;

// Load Routes
app.use("/api", router);

// Server Starter
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
