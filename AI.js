// 价值上亿的代码！！！
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

console.log("loading...");

setTimeout(() => {
  console.log("你好！我是智能机器人嘎嘎嘎，你可以随时和我聊天！！！");
  rl.setPrompt('我> ');
  rl.prompt();
}, 5000);

rl.on('line', function (line) {
  // switch (line.trim()) {
  //   case 'copy':
  //     console.log("复制");
  //     break;
  //   case 'hello':
  //     console.log('world!');
  //     break;
  //   case 'close':
  //     rl.close();
  //     break;
  //   default:
  //     console.log('没有找到命令！');
  //     break;
  // }
  if (line.trim() == "再见") {
    rl.close();
  }else {
    let printOut = line.replace('吗', '').replace('?', '!').replace('？', '!');
    console.log(printOut);  
  }
  rl.prompt();
});

rl.on('close', function () {
  console.log("回头见，记得下次来找我哦！");
  process.exit(0);
});
// const AI = str => str.replace('吗', '').replace('?', '!').replace('？', '!');