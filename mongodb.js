let express=require('express');
let app=new express();

app.set('view engine','ejs');
let MongoClient=require('mongodb').MongoClient;
let dbUrl = 'mongodb://localhost:27017/news';
//链接数据库
MongoClient.connect(dbUrl,function(err,db){

    if(err){
        console.log(err);
        console.log('数据库连接失败，注意开启mongodb服务');
        return false;
    }else {
         console.log('数据库连接成功');
    }
    //添加数据
    db.collection('student').insertOne({"name":"nodejs"},function(err){
        if(err){
            console.log(err);
            console.log('增加数据失败');
            return;
        }
        console.log('增加数据成功');
        db.close();  /*关闭数据库连接*/
    });
    
    //修改数据
    db.collection('student').updateOne({"name":"nodejs"},{$set:{
        "name":"你好nodejs",
        "age":6,
        "sex":"外星人111"
    }},function(err){
        if(err){
            console.log(err);
            return;
        }
        db.close();
        console.log('修改数据成功');
    })
    
   let result= db.collection('student').find({})
    result.toArray(function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    })

})

app.get('/',function (req,res) {
//  res.send('这是首页管理');
res.render('home')
});
app.get('/news/:aid',function (req,res) {
//  res.send('新闻管理');
    // console.log(req.url);
    res.render('news',{
        name:'我是李铟',
        list:[111,222,3333,444]
    })
     console.log(req.query)
     console.log(req.params)
})

app.get('/new/newsList',function (req,res) {
    res.send('新闻详情');
    console.log(req.url)
})

app.listen(4000);
