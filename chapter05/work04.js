// クラスにミックスインを適用する
const flyerMixin = {
    fly: function () {
        console.log(`${this.name}が飛ぶ`);
    },
};

const swimmerMixin = {
    swim: function () {
        console.log(`${this.name}が泳ぐ`);
    },
};

class Animal {
    constructor(name) {
        this.name = name;
    }
}

// Duckクラス自体には、fly・swimは1行も書かれていない

// クラスのprototypeに対してObject.assignすることで、
// そのクラスから作られるすべてのインスタンスがミックスインの機能を使えるようになる
