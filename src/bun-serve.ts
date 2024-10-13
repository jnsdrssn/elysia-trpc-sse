import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { router } from "./trpc";

Bun.serve({
  port: 3000,
  fetch(req) {
    return fetchRequestHandler({
      endpoint: "/trpc",
      router: router,
      req: req,
    });
  },
});
