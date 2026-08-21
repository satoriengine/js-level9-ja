// 複数のミックスインを組み合わせる
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

const duck = { name: 'カモ' };

// 複数のミックスインを、一度にまとめて混ぜ込むこともできる
// ワーク01では継承だけでは表現できなかった「飛ぶ」＋「泳ぐ」の組み合わせが、
// ミックスインなら関数を混ぜ込むだけで実現できる
Object.assign(duck, flyerMixin, swimmerMixin);

duck.fly(); // カモが飛ぶ
duck.swim(); // カモが泳ぐ
