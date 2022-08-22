// create http server
const http = require('http');
http.createServer((req,res)=>{
    res.write('Hello wold');
    res.end();
}).listen(4500);

/*create http server

const http = require('http');

function data(req,res) {
    res.write('Hello wold');
    res.end();
}
http.createServer(data).listen(4500);
*/

