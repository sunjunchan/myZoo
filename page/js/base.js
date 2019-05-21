var randomTeas = new Vue({
    el:"#random_tags",
    data: {
        tags:["猫","狗狗","猫","狗狗","猫","狗狗","猫","狗狗","猫","狗狗","猫","狗狗","猫","狗狗","猫","狗狗","猫","狗狗","猫","狗狗",]
    },
    computed:{
        randomColor:function(){
            return function(){
                var red = Math.random() * 255;
                var green = Math.random() * 255;
                var blue = Math.random() * 255;
                return "rbg(245,251,254)";
                // "+ red +","+ green +","+ blue +"
            }
        },
        randomSize:function(){
            return function(){
                var size = (Math.random() * 20 + 12) + 'px' //保证最小值
                return size
            }
        }
    },
    created:function(){

    }
});
var newHot = new Vue({
    el:"#new_hot",
    data:{
        titleList:[
            {title:"这是一个连接哈哈哈",link:"http://www.baidu.com"},
            {title:"这是一个连接哈哈哈",link:"http://www.baidu.com"},
            {title:"这是一个连接哈哈哈",link:"http://www.baidu.com"},
            {title:"这是一个连接哈哈哈",link:"http://www.baidu.com"},
            {title:"这是一个连接哈哈哈",link:"http://www.baidu.com"},
            {title:"这是一个连接哈哈哈",link:"http://www.baidu.com"},
            {title:"这是一个连接哈哈哈",link:"http://www.baidu.com"}
        ]
    }
});
var newComments = new Vue({
    el:"#new_comments",
    data:{
        commentList: [
            {name:"这里是用户名",date:"2018-10-10",comment:"这里是一大串评论，加了可敬的发酵"},
            {name:"这里是用户名",date:"2018-10-10",comment:"这里是一大串评论，加了可敬的发酵"},
            {name:"这里是用户名",date:"2018-10-10",comment:"这里是一大串评论，加了可敬的发酵"},
            {name:"这里是用户名",date:"2018-10-10",comment:"这里是一大串评论，加了可敬的发酵"},
            {name:"这里是用户名",date:"2018-10-10",comment:"这里是一大串评论，加了可敬的发酵"}
        ]
    }
})