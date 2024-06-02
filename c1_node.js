const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    // res.write('<h1>Hi i am ovijit!!</h1>');
    res.end();
    return;
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      " <ul><li> User No: 1</li><li> User No: 2</li><li> User No: 3</li></ul>",
    );
    res.end();
    return;
  }
});

server.listen(3000);
