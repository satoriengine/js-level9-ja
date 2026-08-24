// 複数の処理をまとめる窓口用の関数を作る
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

// 4つの操作をまとめて行う、窓口となる関数

// 呼び出す側は、watchMovieという1つの関数を呼ぶだけでよくなった
