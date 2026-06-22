import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import serveFile from "./utils/serveFile.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, "public", "index.html");

    serveFile(res, filePath, "text/html");
  } else if (req.url === "/about") {
    const filePath = path.join(__dirname, "public", "about.html");

    serveFile(res, filePath, "text/html");
  } else if (req.url === "/applications") {
    const filePath = path.join(__dirname, "public", "applications.html");

    serveFile(res, filePath, "text/html");
  } else if (req.url === "/contact") {
    const filePath = path.join(__dirname, "public", "contact.html");

    serveFile(res, filePath, "text/html");
  } else if (
    req.url.startsWith("/css") ||
    req.url.startsWith("/js") ||
    req.url.startsWith("/images")
  ) {
    const filePath = path.join(__dirname, "public", req.url);

    const ext = path.extname(filePath);

    const mimeTypes = {
      ".css": "text/css",
      ".js": "text/javascript",
      ".png": "image/png",
      ".jpg": "image/jpeg",
    };

    const contentType = mimeTypes[ext] || "application/octet-stream";

    serveFile(res, filePath, contentType);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found!\n");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
