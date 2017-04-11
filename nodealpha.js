var http = require("http");
var fs = require("fs");

//can you control the reate at whith ht read strm areads? how big is a chcukcnks

//we aren't specifying the tech it's just bte. to read the all the text
//var readStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/shit.txt', 'utf8');

//so basicllay how do e handle this on the sevre side
//why do you need to do this ion a reulgar thoughreadStream.pipe(writeStream);
var server = http.createServer(function(req, res) {

  //we are writing th reposns eheaders once th erequest is retireved what sthe differenc ebtween we cna slo pull of th
  //requedt heders
  //what ahwy woudl you sue  apispes insidtea dof s wread/write stream

  /// s basicllay alal requests set to this port on this pip will be delaht iwht on itn the smae way

//so there are readable streams wirtabel stremas and duplex streams
  var headers = {
    'Content-Type' : 'text/html',
    'Butt-Hole' : 'text/plain'
  }
  res.writeHead(200, headers);
  //res.writeHead(200, {'Butt-Hole' : 'text/plain'});
  var readStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
  //we post back the reponse on loclahost
  //writeStream.write("BLUBOOO");  respoen ids just a writblae stream
  //soh so besides iso if i want o the sevrer ot present an html file, i can jsut put it in thoughreadStream//and pip eit to th sevr
  readStream.pipe(res);
  //res.end("hey Ninjas");
});
server.listen(3000, '127.0.0.1');

//why do we need a request and resposne object. the read stream inherits form the event emitter, through util
// var server = http.createServer(function(req, res) {
//
//   //we are writing th reposns eheaders once th erequest is retireved what sthe differenc ebtween we cna slo pull of th
//   //requedt heders
//
//   /// s basicllay alal requests set to this port on this pip will be delaht iwht on itn the smae way
//
// //so there are readable streams wirtabel stremas and duplex streams
//   var headers = {
//     'Content-Type' : 'text/plain',
//     'Butt-Hole' : 'text/plain'
//   }
//   res.writeHead(200, headers);
//   //res.writeHead(200, {'Butt-Hole' : 'text/plain'});
//
//   //we post back the reponse on loclahost
//   res.end("hey Ninjas");
// });
//
// //we pixk which port and ip adderes ot lsiten
// server.listen(3000, '127.0.0.1');
// console.log("Listening");

//read write in node is a one liner for synchorunsoud reading
