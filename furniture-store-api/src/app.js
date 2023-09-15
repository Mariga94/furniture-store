import express from "express";
import * as dotenv from "dotenv";
import db from "../config/database.config.js";
const app = express();

app.use(express.json());
dotenv.config();

app.get("/check-db-connection", async (req, res) => {
  try {
    const client = await db.connect();
    client.release(); //Release the client back to the pool
    console.log("Database connected");
    res.status(200).json({ message: "Database is connected!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database connection error" });
  }
});

app.get("/", (req, res) => {
  res.status(500).json({ message: "Hello, World!" });
});

export default app;

/**
 *  Application configuration: app.js is used to configure and set up the core
 * of the web application. It's where you create and configure your Express.js application, set up
 * middleware, define routes, and configure various application settings
 *
 **/
