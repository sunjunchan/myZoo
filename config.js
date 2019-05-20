// 把配置文件读出
var fs = require("fs");
var globalConfig = {};
var conf = fs.readFileSync("./page/server.conf");
var configArr = conf.toString().split("\r\n");
for(var i = 0;i < configArr.length;i ++){
    globalConfig[configArr[i].split("=")[0].trim()]=configArr[i].split("=")[1].trim();
}
console.log(configArr)
console.log(globalConfig);
module.exports = globalConfig;