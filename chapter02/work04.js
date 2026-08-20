// getトラップでプロパティの読み取りを検証する
const bankAccount = {
    balance: 1000,
};

// handlerのgetは「トラップ」と呼ばれ、
// プロパティへのアクセスをすべて横取りできる
const handler = {
    // プロパティが読み取られるたびに、この関数が呼ばれる
    get: function (target, propertyName) {
        console.log(`[アクセスログ] ${propertyName}が読み取られました`);
        return target[propertyName];
    },
};

const bankAccountProxy = new Proxy(bankAccount, handler);

console.log(bankAccountProxy.balance);
// [アクセスログ] balanceが読み取られました
// 1000
