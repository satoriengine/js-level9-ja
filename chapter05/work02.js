// Object.assignで機能をオブジェクトに混ぜ込む
// 「飛ぶ」機能だけをまとめたミックスイン
const flyerMixin = {
    fly: function () {
        console.log(`${this.name}が飛ぶ`);
    },
};

const duck = { name: 'カモ' };

// Object.assignで、duckにflyerMixinの機能を混ぜ込む
// duckは、継承を使わずに「飛ぶ」という機能を後から獲得した
Object.assign(duck, flyerMixin);

duck.fly();
// カモが飛ぶ
