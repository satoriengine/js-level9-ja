// ObserverパターンとPub/Subパターンの違いを整理する

// Observer：subjectそのものがobserversを管理する（subjectとobserverが直接繋がる）
// Pub/Sub：eventBusという独立した第三者が仲介する（publisherとsubscriberは互いを知らない）

// Observerパターン：Subject（発行者）が、observersを直接保持している
const subject = {
    observers: [],
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    notifyAll: function (data) {
        this.observers.forEach(function (fn) {
            fn(data);
        });
    },
};

subject.subscribe(function (data) {
    console.log(`[Observer] ${data}`);
});

subject.notifyAll('状態が変化しました');

console.log('---');

// Pub/Subパターン：eventBusという第三者を介して、間接的にやり取りする
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
    console.log(`[Pub/Sub] ${data}`);
});

eventBus.publish('状態が変化しました');
