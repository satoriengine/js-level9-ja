/*
ワーク02_最終問題

以下の手順でコードを作成してください。

1. grindBeans関数を作成します。実行すると "豆を挽く" と表示してください。
2. boilWater関数を作成します。実行すると "お湯を沸かす" と表示してください。
3. brew関数を作成します。実行すると "抽出する" と表示してください。
4. coffeeFacadeオブジェクトを作成します。makeCoffeeメソッドの中で、grindBeans、boilWater、brewの順番で呼び出してください。

実行結果のように表示する処理を作成してください。

実行結果
豆を挽く
お湯を沸かす
抽出する
*/

function grindBeans() {
    // "豆を挽く" と表示する
    console.log('豆を挽く');
}

function boilWater() {
    // "お湯を沸かす" と表示する
    console.log('お湯を沸かす');
}

function brew() {
    // "抽出する" と表示する
    console.log('抽出する');
}

const coffeeFacade = {
    makeCoffee: function () {
        // grindBeans、boilWater、brewの順に呼び出す
        grindBeans();
        boilWater();
        brew();
    },
};

// 以降の部分は変更してはいけません
coffeeFacade.makeCoffee();
