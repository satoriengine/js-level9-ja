// オブジェクトに直接アクセスしてしまう問題
// 問題点：
// balanceに負の値を設定するような、本来あってはならない操作も
// 何のチェックもなく通ってしまう
const bankAccount = {
    balance: 1000,
};

// 誰でも自由に直接書き換えられてしまう
bankAccount.balance = -500;

console.log(bankAccount.balance); // -500
