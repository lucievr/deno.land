import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 3000 });

// for await of = vanilla js feature, creates a loop iterating over async iterable objects
// server is an async iterable, like an array that generates promises which we can await, new promise is generated for every incoming request
for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}
