var express = require("express");//引入express
var globalConfig = require("./config");
var loader = require("./loder");
var app = new express();//new express对象
app.use(express.static("./page/"));//设置静态文件的位置 express 默认找到index.html
app.post("/editEveryDay", loader.get("/editEveryDay"));//get到editEveryDay方法 每日一句
app.get("/queryEveryDay", loader.get("/queryEveryDay"));

app.post("/editBlog", loader.get("/editBlog"));
app.get("/queryBlogByPage",loader.get("/queryBlogByPage"))
// app.get("/queryBlogByPage", loader.get("/queryBlogByPage"));
app.listen(globalConfig.port,function(){
    console.log("服务器已启动");
});
