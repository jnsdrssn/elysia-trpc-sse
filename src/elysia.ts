import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { Elysia } from "elysia";
import { router } from "./trpc";

const PORT = 3000;

export const app = new Elysia()
  .get("/test", async function* () {
    let i = 0;
    while (true) {
      console.log(i);
      yield i;
      i++;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  })
  .all("/trpc/*", async (opts) => {
    console.log(opts);
    const res = await fetchRequestHandler({
      endpoint: "/trpc",
      router: router,
      req: opts.request,
    });
    return res;
  })
  .listen(PORT);

console.log("Listening on", PORT);
