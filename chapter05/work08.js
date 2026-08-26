/*
ワーク08_練習問題

以下の手順でコードを作成してください。

1. borrowableMixinオブジェクトを作成します。borrowメソッドの中で、"${this.title}を貸し出しました" と表示してください。
2. returnableMixinオブジェクトを作成します。giveBackメソッドの中で、"${this.title}を返却しました" と表示してください。
3. Bookというクラスを作成します。コンストラクタでtitleを受け取り、this.titleに設定してください。
4. Object.assignを使って、Book.prototypeにborrowableMixinとreturnableMixinの両方を混ぜ込んでください。

実行結果のように表示する処理を作成してください。

実行結果
JavaScript入門を貸し出しました
JavaScript入門を返却しました
*/

// 以下の部分に処理を作成してください

// 以降の部分は変更してはいけません
const book = new Book('JavaScript入門');
book.borrow();
book.giveBack();
