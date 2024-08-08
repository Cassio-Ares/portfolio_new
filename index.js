const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res)=>{
  const home = req.url;
   
   const data = fs.readFileSync("./index.html");
   console.log(data)

   res.writeHead(200, {"Content-type": "text/html"})

   res.end(data)
})

app.listen(3000, ()=>{
    console.log("listen on port 3000")
})


