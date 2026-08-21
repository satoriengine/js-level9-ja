// 自分で処理できなければ次の処理者に渡す
const supervisorHandler = {
    limit: 10000,
    title: '主任',
    next: null,
    canHandle: function (amount) {
        return amount <= this.limit;
    },
    handle: function (amount) {
        if (this.canHandle(amount)) {
            console.log(`${amount}円：${this.title}が承認しました`);
            return;
        }
        // 自分で処理できなければ、次の処理者に渡す
        if (this.next) {
            this.next.handle(amount);
        }
    },
};

const managerHandler = {
    limit: 100000,
    title: '課長',
    next: null,
    canHandle: function (amount) {
        return amount <= this.limit;
    },
    handle: function (amount) {
        if (this.canHandle(amount)) {
            console.log(`${amount}円：${this.title}が承認しました`);
            return;
        }
        if (this.next) {
            this.next.handle(amount);
        }
    },
};

supervisorHandler.next = managerHandler;

// 主任が対応
supervisorHandler.handle(5000); // 主任が承認しました
// 主任が対応不可 => 課長が対応
supervisorHandler.handle(50000); // 課長が承認しました

// 呼び出す側は、常に先頭のsupervisorHandlerにhandleを呼ぶだけでよい
// 「誰が対応すべきか」は、チェーンの中で自動的に判断される
// これでほぼ完成形ですが、次のワークでハンドラを生成する関数を作る
