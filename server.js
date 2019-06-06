/**
 * Created by Administrator on 2017/5/7 0007.
 */
/*
 如果我们使用PHP来编写后端的代码时，需要Apache 或者 Nginx 的HTTP 服务器，并配上 mod_php5 模块和php-cgi，来处理客户端的请求相应。
 不过对 Node.js 来说，概念完全不一样了。使用 Node.js 时，我们不仅仅 在实现一个应用，同时还实现了整个 HTTP 服务器。
* */




var http = require('http');
var express = require('express');


//var app = express();
//app.get('/clock',function(req,res){
//res.end(new Date().toLocaleString());
//})
// app.listen('8090')
/*
*
req:获取url的信息和请求的信息

res：响应信息

* */

http.createServer(function(req,res){
    //设置网站的响应头
    //设置HTTP头部，状态码是200，文件类型是html，字符集是utf-8
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
//  res.write('你好nodejs111');
    res.write(new Date().toLocaleString());
    res.end();   /*结束nodejs 的响应*/

}).listen(3000,'127.0.0.1');
//listen监听的端口


