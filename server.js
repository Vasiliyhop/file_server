//  file_server v0.0.1 (c)Vasiliy Shevchuk 2012
var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');
//port ==>    
var port = 8000;
//...............
var style = require('./style.js');
var mimeTypes = {
    "html": "text/html",
    "css": "text/css",
    "js": "text/javascript",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "ico": "image/gif",
    "png": "image/png",
    "mp3": "audio/mpeg",
    "ogg": "audio/ogg",
    "wav": "audio/wav"};
//Start server
console.log(style.bold+style.cyan+'Server start==>'+style.reset);

http.createServer(function(req, res) {
    var status_code = 200;
    var header = {'Content-Type': 'text/plain'};
    var uri = url.parse(req.url).pathname;
    if (uri == '/') {
        uri = '/index.html';
    }
    var filename = path.join(process.cwd(), uri);
    var Ext = path.extname(filename).split(".")[1];
    var mimeType = mimeTypes[Ext];
    path.exists(filename, function(exists) {
        if((!exists)||(!mimeType)) {
            console.log(style.red+style.bold+"not exists: " + style.reset+style.magenta+filename+style.reset);
            res.writeHead(status_code, header);
            res.write('404 Not Found\n');
            res.end();
        }else{
            if (mimeType=='audio/mpeg'||mimeType=='audio/ogg'||mimeType=='audio/wav') {
                var stat = fs.statSync(filename);
                status_code = 200;
                header = {
                    'Cache-Control': 'max-age=29030400',
                    'Content-Transfer-Encoding': 'binary',
                    'Content-Length': stat.size,
                    "Content-Type": mimeType,
                    "Date":new Date,
                    "Server":'node'           
                }
            } else {
               status_code = 200; 
               header = {'Content-Type':mimeType};
            }
            res.writeHead(status_code, header);

            var fileStream = fs.createReadStream(filename);
            if (filename.split(".")[1] != 'ico') {
                console.log(style.green+'Reading ...'+style.yellow+filename+style.reset);
            } 
              
            fileStream.on('data', function (data) {
                res.write(data);
            });
            fileStream.on('end', function() {
                res.end();
            });
        }
    });
}).listen(port);