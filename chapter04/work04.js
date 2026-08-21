// Publisher側がSubscriberの存在を一切知らないことを確認する
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

// Publisher（発行者）：温度を計測して発行するだけの関数
function measureTemperature(value) {
    console.log(`計測しました: ${value}度`);
    // 発行するだけで、誰が受け取るかは一切知らない
    eventBus.publish(value);
}

// Subscriber（購読者）は、Publisherとは無関係な場所で登録される
eventBus.subscribe(function (temperature) {
    console.log(`[表示] ${temperature}度です`);
});

measureTemperature(30);
// 計測しました: 30度
// [表示] 30度です

// measureTemperature関数のコードの中には、
// 購読者（表示用の関数）についての記述が一切登場していない
