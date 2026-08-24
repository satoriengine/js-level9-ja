// 代理オブジェクトを挟んでアクセスを制御する
// bankAccountProxyという「代理」を経由することで、
// 本体（bankAccount）への直接アクセスを防ぎつつ、チェックを挟める
const bankAccount = {
    balance: 1000,
};

// bankAccountの代わりにアクセスを受け付ける「代理」オブジェクト

bankAccountProxy.setBalance(-500); // エラー：残高をマイナスにはできません
console.log(bankAccountProxy.getBalance()); // 1000（変更されていない）

bankAccountProxy.setBalance(2000);
console.log(bankAccountProxy.getBalance()); // 2000
