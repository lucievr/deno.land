import { Application } from "https://deno.land/x/oak@v5.2.0/mod.ts";

const app = new Application();

app.use((ctx) => { // context object, holds a reference to request and response
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });