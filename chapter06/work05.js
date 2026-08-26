// チェーンの順番を自由に組み替える

// もし承認フローが変わり「課長を飛ばして部長に直接エスカレーションしたい」場合、
// supervisorHandler.next = directorHandler; のように連結先を変えるだけで、
// 各ハンドラ自体のコードには一切手を触れずに済む

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
            }
        },
    };
}

// 主任ハンドラ

// 課長ハンドラ

// 部長ハンドラ

// 主任 => 課長 => 部長 の順に連結する

// 部長が承認しました
