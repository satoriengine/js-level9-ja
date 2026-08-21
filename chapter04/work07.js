/*
ワーク07_練習問題

以下の手順でコードを作成してください。

1. chatBusオブジェクトを作成します。subscribers（空配列）、subscribeメソッド、publishメソッドを持たせてください。
2. subscribeメソッドは、受け取った関数をsubscribersに追加してください。
3. publishメソッドは、受け取ったmessageを使って、subscribers内の各関数を呼び出してください。

実行結果のように表示する処理を作成してください。

実行結果
[通知] こんにちは
*/

const chatBus = {
    subscribers: [],
    subscribe: function (fn) {
        // subscribersにfnを追加する
        this.subscribers.push(fn);
    },
    publish: function (message) {
        // subscribers内の各関数にmessageを渡して呼び出す
        this.subscribers.forEach(function (fn) {
            fn(message);
        });
    },
};

// 以降の部分は変更してはいけません
chatBus.subscribe(function (message) {
    console.log(`[通知] ${message}`);
});
chatBus.publish('こんにちは');
