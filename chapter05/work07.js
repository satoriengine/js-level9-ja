/*
ワーク07_練習問題

以下の手順でコードを作成してください。

1. flyerMixinオブジェクトを作成します。flyメソッドの中で、"${this.name}が空を飛ぶ" と表示してください。
2. swimmerMixinオブジェクトを作成します。swimメソッドの中で、"${this.name}が水中を泳ぐ" と表示してください。
3. penguinという { name: 'ペンギン' } の形のオブジェクトを用意します。
4. Object.assignを使って、penguinにswimmerMixinだけを混ぜ込んでください（ペンギンは飛べないため）。

実行結果のように表示する処理を作成してください。

実行結果
ペンギンが水中を泳ぐ
*/

const flyerMixin = {
    fly: function () {
        // "${this.name}が空を飛ぶ" と表示する
        console.log(`${this.name}が空を飛ぶ`);
    },
};

const swimmerMixin = {
    swim: function () {
        // "${this.name}が水中を泳ぐ" と表示する
        console.log(`${this.name}が水中を泳ぐ`);
    },
};

const penguin = { name: 'ペンギン' };

// swimmerMixinだけをpenguinに混ぜ込む
Object.assign(penguin, swimmerMixin);

// 以降の部分は変更してはいけません
penguin.swim();
