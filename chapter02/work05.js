// setトラップで書き込みを制限する
const bankAccount = {
    balance: 1000,
};

// setトラップを使うことで、ワーク02で手作業で書いていたチェックを、
// 「プロパティへの代入」という自然な書き方のまま実現できる
const handler = {
    // プロパティに値が書き込まれるたびに、この関数が呼ばれる
    set: function (target, propertyName, value) {
        if (propertyName === 'balance' && value < 0) {
            console.log('エラー：残高をマイナスにはできません');
            return true; // trueを返さないとエラーになる
        }
        target[propertyName] = value;
        return true;
    },
};

const bankAccountProxy = new Proxy(bankAccount, handler);

bankAccountProxy.balance = -500;
console.log(bankAccountProxy.balance); // 1000（書き込みが拒否された）

bankAccountProxy.balance = 2000;
console.log(bankAccountProxy.balance); // 2000
