/*
ワーク08_練習問題

以下の手順でコードを作成してください。

1. configという { theme: 'light' } の形のオブジェクトを用意します。
2. handlerオブジェクトを作成します。
3. handler.setの中で、"エラー：読み取り専用です" と表示したうえで、trueを返してください（値の書き込みは行わない）。
4. new Proxyを使って、configとhandlerからconfigProxyを作成してください。

実行結果のように表示する処理を作成してください。

実行結果
light
エラー：読み取り専用です
light
*/

// 以下の部分に処理を作成してください

// 以降の部分は変更してはいけません
console.log(configProxy.theme);
configProxy.theme = 'dark';
console.log(configProxy.theme);
