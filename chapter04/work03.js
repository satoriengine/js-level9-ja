// 仲介者（EventBus）を挟んで依存を断ち切る

// ワーク02では「温度用」「在庫用」で別々の仕組みが必要だったが、
// eventBusという1つの仲介者を、どんな通知にも使い回せる

// すべての通知を1箇所で管理する、仲介者（EventBus）
const eventBus = {
    subscribers: [],
    subscribe: function (fn) {
        this.subscribers.push(fn);
    },
    publish: function (data) {
        this.subscribers.forEach(function (fn) {
            fn(data);
        });
    },
};

eventBus.subscribe(function (data) {
    console.log(`受信: ${data}`);
});

eventBus.publish('こんにちは');
// 受信: こんにちは
