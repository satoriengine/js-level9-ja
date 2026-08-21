// ミックスインの名前衝突に注意する

// ミックスインは手軽に機能を混ぜ込める一方、
// 同じ名前のメソッドが複数のミックスインにあると、
// 静かに上書きされてしまう（エラーにはならない）という注意点がある

const flyerMixin = {
    move: function () {
        console.log(`${this.name}が飛んで移動する`);
    },
};

const swimmerMixin = {
    move: function () {
        console.log(`${this.name}が泳いで移動する`);
    },
};

const duck = { name: 'カモ' };

// 同じ名前（move）のメソッドを持つミックスインを両方適用すると、
// 後から適用した方（この場合swimmerMixin）で上書きされる
Object.assign(duck, flyerMixin, swimmerMixin);

duck.move(); // カモが泳いで移動する（flyerMixinのmoveは上書きされて消えている）
