// setトラップで書き込みを制限する
const bankAccount = {
    balance: 1000,
};

// setトラップを使うことで、ワーク02で手作業で書いていたチェックを、
// 「プロパティへの代入」という自然な書き方のまま実現できる

bankAccountProxy.balance = -500;
console.log(bankAccountProxy.balance); // 1000（書き込みが拒否された）

bankAccountProxy.balance = 2000;
console.log(bankAccountProxy.balance); // 2000
