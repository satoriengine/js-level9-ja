// JSネイティブのProxyオブジェクトを使う
// handlerが空のままだと、Proxyはただ素通りするだけの代理になる
// 次のワークから、このhandlerに「検証」の機能を追加していく
const bankAccount = {
    balance: 1000,
};

// JavaScriptには、Proxyパターンをそのまま言語機能として使えるProxyオブジェクトがある

console.log(bankAccountProxy.balance); // 1000

bankAccountProxy.balance = 2000;
console.log(bankAccountProxy.balance); // 2000
console.log(bankAccount.balance); // 2000（本体にも反映されている）
