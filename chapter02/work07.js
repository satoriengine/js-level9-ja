/*
ワーク07_練習問題

以下の手順でコードを作成してください。

1. userという { name: 'Bob', age: 20 } の形のオブジェクトを用意します。
2. handlerオブジェクトを作成します。
3. handler.getの中で、"[LOG] ${プロパティ名}を読み取りました" という形式でログを表示したうえで、target[propertyName]を返してください。
4. new Proxyを使って、userとhandlerからuserProxyを作成してください。

実行結果のように表示する処理を作成してください。

実行結果
[LOG] nameを読み取りました
Bob
[LOG] ageを読み取りました
20
*/

// 以下の部分に処理を作成してください

// 以降の部分は変更してはいけません
console.log(userProxy.name);
console.log(userProxy.age);
