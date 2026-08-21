// 1つの関数に全ての判定条件を詰め込む問題

// 問題点：
// 承認者の階層が増えるたびに、approveExpense自体にelse ifを追加し続けることになる
// 「誰が承認するか」という判断ロジックが、1つの関数の中にすべて詰め込まれている

function approveExpense(amount) {
    if (amount <= 10000) {
        console.log(`${amount}円：主任が承認しました`);
    } else if (amount <= 100000) {
        console.log(`${amount}円：課長が承認しました`);
    } else if (amount <= 1000000) {
        console.log(`${amount}円：部長が承認しました`);
    } else {
        console.log(`${amount}円：社長の承認が必要です`);
    }
}

approveExpense(5000); // 主任が承認しました
approveExpense(50000); // 課長が承認しました
approveExpense(500000); // 部長が承認しました
