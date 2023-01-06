import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { getEventsCache } from "./modules/api/fetchEvents/cache";
import { initCron } from "./modules/cron";
import { fetchEvents } from "./modules/api/fetchEvents";
import { authenticate } from "./modules/api/auth";

dotenv.config();

const server: FastifyInstance = Fastify({});

// todo: restrict this
server.register(cors, {
  origin: "*",
});

server.get("/", async (req, res) => {
  return res.redirect(process.env.ROOT_REDIRECT);
});

server.get("/events", async () => {
  return getEventsCache();
});

const startServer = async () => {
  try {
    await server.listen({ port: process.env.SERVER_PORT as unknown as number });

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;

    console.log(
      `\n\nServer started at: ${(address as any).address}:${port}\n\n`
    );
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

(async () => {
  await startServer();
  await authenticate();
  await fetchEvents();
  initCron();
})();
