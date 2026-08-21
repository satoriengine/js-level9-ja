// 途中で誰も処理できなかった場合を扱う

// チェーンの末尾（managerHandler）まで渡されても、
// 誰も対応できなかった場合の振る舞いを、明示的に用意しておく必要がある

// ハンドラ生成用関数
function createHandler(limit, title) {
    return {
        limit: limit,
        title: title,
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
                return;
            }
            // チェーンの最後まで到達しても、誰も対応できなかった場合
            console.log(`${amount}円：承認できる担当者がいません`);
        },
    };
}

// 主任ハンドラ
const supervisorHandler = createHandler(10000, '主任');
// 課長ハンドラ
const managerHandler = createHandler(100000, '課長');

// 主任 => 課長 の順に連結する
supervisorHandler.next = managerHandler;
// managerHandler.nextは連結していない（nullのまま）

supervisorHandler.handle(5000000);
// 承認できる担当者がいません
