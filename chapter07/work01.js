/*
ワーク01_最終問題

以下の手順でコードを作成してください。

1. speakerという { volume: 50 } の形のオブジェクトを用意します。
2. handlerオブジェクトを作成します。
3. handler.setの中で、propertyNameが'volume'かつvalueが0未満または100より大きい場合、"エラー：設定できる音量は0〜100です" と表示し、trueを返してください。それ以外の場合は、target[propertyName]にvalueを設定し、trueを返してください。
4. new Proxyを使って、speakerとhandlerからspeakerProxyを作成してください。

実行結果のように表示する処理を作成してください。

実行結果
50
エラー：設定できる音量は0〜100です
50
80
*/

// 以下の部分に処理を作成してください

// 以降の部分は変更してはいけません
console.log(speakerProxy.volume);
speakerProxy.volume = 150;
console.log(speakerProxy.volume);
speakerProxy.volume = 80;
console.log(speakerProxy.volume);
