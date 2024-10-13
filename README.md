# tRPC Server-Sent Events

To install dependencies:

```bash
bun install
```

To run the client:

```bash
bun run src/client.ts
```

To run the Elysia server:

```bash
bun run src/elysia.ts
```


To run the Bun server:

```bash
bun run src/bun-serve.ts
```

## Examples
### Elysia and curl
<img width="1464" alt="Screenshot 2024-10-13 at 12 51 55" src="https://github.com/user-attachments/assets/ef309634-99e9-47f8-8aa3-af86b1688539">

### Bun and curl
<img width="1468" alt="Screenshot 2024-10-13 at 12 52 53" src="https://github.com/user-attachments/assets/0c167137-8bf9-41d7-a51d-b8ac48477a55">

### Elyisa and tRPC client (the client never makes the request)
<img width="1132" alt="Screenshot 2024-10-13 at 12 54 06" src="https://github.com/user-attachments/assets/a0b8941c-9c4b-4975-9b82-b120add02763">


# Problems
- the tRPC client never makes the request
- running the tRPC client wihtout a running server does *not* throw an error


This project was created using `bun init` in bun v1.1.30. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
