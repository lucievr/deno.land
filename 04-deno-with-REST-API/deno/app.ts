import { Application } from 'https://deno.land/x/oak@v5.2.0/mod.ts';

import todosRoutes from './routes/todos.ts'; // must include file extension!

const app = new Application();

// oak always automatically sends a response
// if we have any async middlewares, we should make all other middlewares async (next wouldn't otherwise wait for the promises in todos routes to resolve)
// wait for promises to resolve before we send the automatic response
app.use(async (ctx, next) => {
  console.log('Middleware');
  await next();
});

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 3000 });
