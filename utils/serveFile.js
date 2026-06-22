import fs from "fs";
function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end("Server Erro");
    }

    res.writeHead(200, {
      "Content-Type": contentType,
    });
    res.end(data);
  });
}
export default serveFile;
