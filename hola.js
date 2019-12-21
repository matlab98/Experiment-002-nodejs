function decir(palabra) {
  console.log(palabra);
}

function ejecutar(algunaFuncion, valor) {
  algunaFuncion(valor);
}

ejecutar(decir, "Hola");

function ejecutar(algunaFuncion, valor) {
  algunaFuncion(valor);
}

ejecutar(function(palabra){ console.log(palabra) }, "Hola|");

var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}).listen(8890);


