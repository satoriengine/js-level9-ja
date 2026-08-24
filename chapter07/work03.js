/*
ワーク03_最終問題

以下の手順でコードを作成してください。

1. weatherBusオブジェクトを作成します。subscribers（空配列）、subscribeメソッド、publishメソッドを持たせてください。
2. subscribeメソッドは、受け取った関数をsubscribersに追加してください。
3. publishメソッドは、受け取ったalertを使って、subscribers内の各関数を呼び出してください。

実行結果のように表示する処理を作成してください。

実行結果
[気象警報] 大雨警報が発表されました
*/

// 以下の部分に処理を作成してください

// 以降の部分は変更してはいけません
weatherBus.subscribe(function (alert) {
    console.log(`[気象警報] ${alert}`);
});
weatherBus.publish('大雨警報が発表されました');
