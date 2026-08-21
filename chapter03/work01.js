// 複雑な内部処理を毎回直接呼び出す問題

// 問題点：
// 呼び出す側が、4つのサブシステムそれぞれの使い方と、
// 正しい呼び出し順序まで、すべて知っていなければならない
const projector = {
    turnOn: function () {
        console.log('プロジェクターの電源を入れる');
    },
};

const screen = {
    lower: function () {
        console.log('スクリーンを下ろす');
    },
};

const audioSystem = {
    setVolume: function (level) {
        console.log(`音量を${level}に設定する`);
    },
};

const player = {
    play: function (movie) {
        console.log(`${movie}を再生する`);
    },
};

// 映画を観るだけなのに、4つのサブシステムをすべて直接操作しなければならない
projector.turnOn();
screen.lower();
audioSystem.setVolume(20);
player.play('アクション映画');
