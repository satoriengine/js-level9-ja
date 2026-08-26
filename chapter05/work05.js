// ミックスイン関数として再利用可能な形にする
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

// 「あるクラスに、複数のミックスインを適用する」処理そのものを関数化する
// applyMixinsという関数にまとめたことで、
// どのクラスに、どのミックスインを適用するかを、簡潔に指定できる
function applyMixins(targetClass, mixins) {
    mixins.forEach(function (mixin) {
        Object.assign(targetClass.prototype, mixin);
    });
}

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Duck extends Animal {}
class FlyingFish extends Animal {}

// flyingFish.swim(); // swimは適用していないので呼び出せない
