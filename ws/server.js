
var http = require('http');

http.createServer(function(req,res){
    //设置网站的响应头
    //设置HTTP头部，状态码是200，文件类型是html，字符集是utf-8
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
//  res.write('你好nodejs111');
    res.write(new Date().toLocaleString());
    res.end();   /*结束nodejs 的响应*/

}).listen(3000,'127.0.0.1');

//----------------------------------------

var WSServer= require('ws').Server
var wsServer= new WSServer({port:8888})
//监听客户端的连接,当客户端连接上时的回调函数
wsServer.on('connection',function(socket){  //socket是插座的意思,每个客户端连接上服务器之后都会创建一个唯一的socket
  console.log('客户端已连接')
  wsServer.send('server:'+ '服务端发给客户端的数据')
  //message 监听客户端发过来的消息
  wsServer.on('message',function(message){
    console.log('客户端发来的数据',message)
    wsServer.send('server:'+ '服务端发给客户端的数据')
  })
})
