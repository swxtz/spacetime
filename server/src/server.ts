import * as dotenv from "dotenv";
dotenv.config();

import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import { authRoutes } from "./routes/auth";

const app = fastify();
const port = Number(process.env.HOST_PORT) || 3333;
const jwtSecret = process.env.JWT_SECRET_DEV || "spacetime";
app.register(cors, {
  origin: true, //Mudar no deploy
});

app.register(jwt, {
  secret: jwtSecret
});

app.register(memoriesRoutes);
app.register(authRoutes);

app.listen({
  port,
}).then(() => {
  console.log(`🚀 HTTP Server running on http://localhost:${port}`);
});