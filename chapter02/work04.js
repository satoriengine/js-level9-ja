// getトラップでプロパティの読み取りを検証する
const bankAccount = {
    balance: 1000,
};

// handlerのgetは「トラップ」と呼ばれ、
// プロパティへのアクセスをすべて横取りできる

console.log(bankAccountProxy.balance);
// [アクセスログ] balanceが読み取られました
// 1000
