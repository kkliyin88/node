let router={
    login:function(req,res){
        console.log('这是登陆页面')
        res.send('这是登陆页面')
    },
    home:function(req,res){
        console.log('这是首页');
          res.send('这是首页');
    },
     news:function(req,res){
        console.log('这是新闻页面');
          res.send('这是新闻页面');
    }
}

module.exports=router;
