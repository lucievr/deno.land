import { MongoClient, Database } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const MONGODB_URI = `mongodb+srv://${Deno.env.get("DB_USER")}:${
  Deno.env.get("DB_PASS")
}@cluster0-vo9l7.mongodb.net/?retryWrites=true&w=majority`;

let db: Database;

export function connect() {
  const client = new MongoClient();
  client.connectWithUri(MONGODB_URI);

  db = client.database("todos");
}

export function getDb() {
  return db;
}
