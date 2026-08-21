/*
ワーク04_最終問題

以下の手順でコードを作成してください。

1. likeableMixinオブジェクトを作成します。likeメソッドの中で、"${this.title}にいいねしました" と表示してください。
2. commentableMixinオブジェクトを作成します。commentメソッドの中で、"${this.title}にコメントしました" と表示してください。
3. Postというクラスを作成します。コンストラクタでtitleを受け取り、this.titleに設定してください。
4. Object.assignを使って、Post.prototypeにlikeableMixinとcommentableMixinの両方を混ぜ込んでください。

実行結果のように表示する処理を作成してください。

実行結果
旅行記にいいねしました
旅行記にコメントしました
*/

const likeableMixin = {
    like: function () {
        // "${this.title}にいいねしました" と表示する
        console.log(`${this.title}にいいねしました`);
    },
};

const commentableMixin = {
    comment: function () {
        // "${this.title}にコメントしました" と表示する
        console.log(`${this.title}にコメントしました`);
    },
};

class Post {
    constructor(title) {
        this.title = title;
    }
}

// Post.prototypeにlikeableMixinとcommentableMixinを混ぜ込む
Object.assign(Post.prototype, likeableMixin, commentableMixin);

// 以降の部分は変更してはいけません
const post = new Post('旅行記');
post.like();
post.comment();
