import {
  createTRPCClient,
  httpBatchLink,
  splitLink,
  unstable_httpSubscriptionLink,
} from "@trpc/client";
import type { AppRouter } from "./trpc";

const API_URL = "http://localhost:3000/trpc";

const client = createTRPCClient<AppRouter>({
  links: [
    splitLink({
      // uses the httpSubscriptionLink for subscriptions
      condition: (op) => {
        console.log(op);
        return op.type === "subscription";
      },
      true: unstable_httpSubscriptionLink({
        url: API_URL,
      }),
      false: httpBatchLink({
        url: API_URL,
      }),
    }),
  ],
});

async function main() {
  // const hello = await client.hello.query();
  // console.log(hello);

  let count = 0;
  await new Promise<void>((resolve) => {
    console.log("pulling");
    const subscription = client.stream.subscribe(undefined, {
      onStarted() {
        console.log("started");
      },
      onData(data) {
        // ^ note that `data` here is inferred
        console.log("received", data);
        count++;
        if (count > 3) {
          // stop after 3 pulls
          subscription.unsubscribe();
          resolve();
        }
      },
      onError(err) {
        console.error("error", err);
      },
    });
  });
}

await main();
