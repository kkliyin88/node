/**
 * Created by Administrator on 2017/5/7 0007.
 */

//url模块


var http=require('http');

var url=require('url');


var app=http.createServer(function(req,res){

    console.log(req.url);  /*获取浏览器输入的url   要在nodejs运行的控制台看打印的信息*/
//http://127.0.0.1:3001/news?aid=123&username=zhangsan

    var pathname=req.url;   //news?aid=1234&username=zhangsan

    if(pathname!='/favicon.ico'){  /*默认网站图标触发的请求*/

    //获取get传值
        var query=url.parse(pathname,true).query;

        console.log('aid='+query.aid);

        console.log('username='+query.username);
    }

    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});


    res.write('你好nodejs1111');

    res.end();
})

app.listen(3001,'127.0.0.1');









