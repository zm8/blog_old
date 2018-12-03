const readline = require('readline');

// 输入内容
module.exports = (cnt) => {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(`\n${cnt}`, (msg) => {
            console.log('');
            rl.close();
            resolve(msg);
        });
    });
}