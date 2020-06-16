import { Application } from "https://deno.land/x/oak/mod.ts";

import todosRoutes from "./routes/todos.ts"; // must include file extension!
import { connect } from './helpers/db_client.ts';

connect();

const app = new Application();

// oak always automatically sends a response
// if we have any async middlewares, we should make all other middlewares async (next wouldn't otherwise wait for the promises in todos routes to resolve)
// wait for promises to resolve before we send the automatic response
app.use(async (ctx, next) => {
  console.log("Middleware");
  await next();
});

app.use(async (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE",
  );
  ctx.response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  await next(); // the next middleware routes is async so this middleware needs to be too
});

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 8000 });

// need to run with the below flags, mongo plugin currently unstable + allow env, read and write access
// deno run --allow-net --allow-env --allow-write --allow-read --allow-plugin --unstable app.ts
