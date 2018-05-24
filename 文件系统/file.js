var fs = require('fs');
console.log(__filename)
fs.stat('E:/wanghuipeng/gitProject/node_demos/文件系统/file.js', function(err, stats) {
    console.log(stats, stats.isFile()); //true
})