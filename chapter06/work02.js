// 処理者（ハンドラ）をオブジェクトとして切り出す

// それぞれのハンドラは、「自分が対応できるか（canHandle）」と
// 「実際に処理する（handle）」という、共通の形を持っている

// それぞれの承認者を、独立したハンドラオブジェクトとして表現する
const supervisorHandler = {
    limit: 10000,
    title: '主任',
    canHandle: function (amount) {
        return amount <= this.limit;
    },
    handle: function (amount) {
        console.log(`${amount}円：${this.title}が承認しました`);
    },
};

const managerHandler = {
    limit: 100000,
    title: '課長',
    canHandle: function (amount) {
        return amount <= this.limit;
    },
    handle: function (amount) {
        console.log(`${amount}円：${this.title}が承認しました`);
    },
};

// それぞれのハンドラーでcanHandleメソッドを呼び出す
console.log(supervisorHandler.canHandle(5000)); // true
console.log(managerHandler.canHandle(5000)); // true（まだ連結していないので、両方が対応可能と判定される）
// 現時点ではまだ完成形ではない
