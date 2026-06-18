import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Homepage!\n");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page!\n");
  } else if (req.url === "/applications") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Applications Page!\n");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact Page!\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found!\n");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
