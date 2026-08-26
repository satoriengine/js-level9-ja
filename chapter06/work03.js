// 次の処理者への参照を持たせて連結する
const supervisorHandler = {
    limit: 10000,
    title: '主任',
    next: null, // 次の処理者への参照
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
    next: null,
    canHandle: function (amount) {
        return amount <= this.limit;
    },
    handle: function (amount) {
        console.log(`${amount}円：${this.title}が承認しました`);
    },
};

// 主任の次に、課長を連結する

// nextプロパティによって、主任から課長へと、鎖（チェーン）のようにつながった

// 現時点ではまだ完成形ではない
