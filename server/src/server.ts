import * as dotenv from "dotenv";
dotenv.config();

import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();
const port = Number(process.env.HOST_PORT) || 3333;

app.register(memoriesRoutes);

app.listen({
  port,
}).then(() => {
  console.log(`🚀 HTTP Server running on http://localhost:${port}`);
});