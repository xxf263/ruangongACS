var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('mainwindow');
});

router.get('/favicon.ico', function(req, res){
    res.end('404 error');
});

router.get('/:id', function(req, res){
    res.render(req.params.id);
});

router.get('/room:id', function(req, res){
    res.render('room'+req.params.id);
});
// 如果是GET请求，则执行：
// router.get('/roomDo', function(req, res){
//     res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
//     res.end(JSON.stringify({code: 1, str: "数据库查询得到的内容"}));
// });

// // 如果是POST请求，则执行：
// router.post('/roomDo', function(req, res){
//     res.writeHead(200, {'Access-Control-Allow-Origin': '*'});

//     var postData = '';
//     req.setEncoding('utf8');
//     // 监听data事件：代表有从客户端post过来的数据
//     req.addListener('data', function(postDataChunk){
//         postData += postDataChunk;
//     });
//     // 监听end事件：代表post数据结束
//     req.addListener('end', function(){
//         console.log("从客户端发过来的数据是："+postData);
//     });

//     res.end(JSON.stringify({code: 1, str: "数据库查询得到的内容"}));
// });

// 导出router作为一个模块，供app.js调用
module.exports = router;
