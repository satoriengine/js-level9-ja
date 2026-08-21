// 1つの継承関係だけでは表現しきれない問題

// 問題点：
// カモは「飛ぶ」ことも「泳ぐ」こともできるが、
// JavaScriptのクラスは1つの親クラスしか継承できないため、
// BirdとFishの両方を同時に継承することはできない
// class Duck extends Bird, Fish {} // このような書き方はできない

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Bird extends Animal {
    fly() {
        console.log(`${this.name}が飛ぶ`);
    }
}

class Fish extends Animal {
    swim() {
        console.log(`${this.name}が泳ぐ`);
    }
}

const sparrow = new Bird('スズメ');
sparrow.fly(); // スズメが飛ぶ

const salmon = new Fish('サケ');
salmon.swim(); // サケが泳ぐ
