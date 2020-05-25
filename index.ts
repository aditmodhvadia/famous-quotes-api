import {
  Application,
  Router,
} from "https://deno.land/x/denotrain@v0.5.0/mod.ts";
import { quotes } from "./quotes/quotes.ts";

const port = 8000;
const baseUrl = "/api";

// Create a new application (port defaults to 3000, hostname to 0.0.0.0)
const app = new Application({ port: port, hostname: "localhost" }); // Replace with your local network address
// Optional: Generate router and hook routes to it
const router = new Router();

app.use(baseUrl, router);

app.get("/", (ctx) => {
  return "Hello from Deno.";
});

router.get("/quotes", (ctx) => {
  return { "quotes": quotes };
});

console.log(`Quotes API running on https://localhost:${port}/`);

// Run the application on the specified port
await app.run();
