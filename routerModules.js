

let router=require('./module/router');
let express=require('express');
let app=new express();
let url=require('url')
app.listen(4000);

app.set('view engine','ejs');
let pathNmae=req.url.substring(1);
// console.log(pathNmae);
app.get(router['pathNmae'],function (req,res) {
//  res.send('新闻管理');
    // console.log(req.url);
    console.log(req.url)
    
    console.log(pathNmae);
    res.render('news',{
        name:'我是李铟',
        list:[111,222,3333,444]
    })
})



