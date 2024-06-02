const http = require("http");

const server =http.createServer((req, res) =>{
    const url=req.url;
    console.log(url);

    if (url === '/'){
        res.setHeader("Content-Type", "text/html");
        res.write('<html>This is the home page <br> You can start with "/me </html>');
        res.end();
        return;
    }
    if (url ==='/me'){
        res.setHeader("Content-Type", "text/html");
        res.write('<html>Hi i am ovijit <br> <h1>Your are done</h1> <br> you can try now with "/users" </html>');
        res.end();
        return;
    }

    if (url==='/test1'){
        res.setHeader("Content-Type", "text/html");
        res.write('<html>');
        res.write('<head><title>Test1</title></head>');
        res.write('<body>');
        res.write('<h1>Test1</h1>');
        res.write('<form action="/test1" method="GET">');
        res.write('<input type="text" name="name" placeholder="Enter your name">');
        res.write('<input type="number" name="age" placeholder="Enter your age">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    
    }

    console.log(url.split("name="))

    if(url.split("name=")[0] === '/test1?') {
        
        res.write(`<h1>welcome ${url.split("name=")[1].split("&")[0].replace("+", " ")}</h2>`);
        res.write(`<h1>your age is ${url.split("age=")[1]}</h2>`);
        return res.end();
    }

    res.write('<h1>404 not found page</h1> <br> lets start with "/" again ')
    res.end();
});


server.listen(29352)