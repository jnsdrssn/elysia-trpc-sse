// You can use any variable name you like.

import { initTRPC } from "@trpc/server";

// We use t to keep things simple.
const t = initTRPC.create();

export const publicProcedure = t.procedure;
export const router = t.router({
  hello: publicProcedure.query(() => {
    return "Hello, world!";
  }),
  stream: publicProcedure.subscription(async function* ({ input }) {
    let i = 0;
    while (true) {
      console.log(i);
      yield i;
      i++;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }),
});

export type AppRouter = typeof router;
