import http from "http";

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
  const info = {
    url: req.url,
    method: req.method,
    headers: req.headers,
    body: req.body
  };

  const now = new Date()  

  console.log(`${now.toLocaleDateString()} ${now.toLocaleTimeString()}`, info)

  //response headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  //end the response
  res.end();
});

server.listen(PORT, () => {
  console.log(`request catcher server started on port: ${PORT}`);
});
