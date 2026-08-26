/*
ワーク07_練習問題

以下の手順でコードを作成してください。

1. createSupportHandler関数を作成します。引数として canHandleFn、title を受け取ります。
2. { title, next: null, canHandle: canHandleFn, handle: function(issue) {...} } の形のオブジェクトを返してください。
3. handleメソッドの中で、this.canHandle(issue)がtrueなら "${title}が対応します" と表示してください。falseで、this.nextが存在すればthis.next.handle(issue)を呼び出してください。this.nextも存在しなければ、"対応できる担当者がいません" と表示してください。
4. tier1Handlerを createSupportHandler(function(issue) { return issue === 'simple'; }, '一次窓口') で作成してください。
5. tier2Handlerを createSupportHandler(function(issue) { return issue === 'technical'; }, '技術チーム') で作成してください。
6. tier1Handler.nextにtier2Handlerを設定してください。

実行結果のように表示する処理を作成してください。

実行結果
一次窓口が対応します
技術チームが対応します
対応できる担当者がいません
*/

// 以下の部分に処理を作成してください

// 以降の部分は変更してはいけません
tier1Handler.handle('simple');
tier1Handler.handle('technical');
tier1Handler.handle('billing');
