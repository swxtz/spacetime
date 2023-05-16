import * as dotenv from "dotenv";
dotenv.config();

import fastify from "fastify";
import { prisma } from "./lib/prisma";

const app = fastify();
const port = Number(process.env.HOST_PORT) || 3333;

app.get("/users" , async () => {
    const users = await prisma.user.findMany();
    return users;
});

app.listen({
    port,
}).then(() => {
    console.log(`🚀 HTTP Server running on http://localhost:${port}`);
});