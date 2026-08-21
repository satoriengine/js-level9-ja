// 複数のサブシステムをまとめて扱うファサードを作る
const projector = {
    turnOn: function () {
        console.log('プロジェクターの電源を入れる');
    },
    turnOff: function () {
        console.log('プロジェクターの電源を切る');
    },
};

const screen = {
    lower: function () {
        console.log('スクリーンを下ろす');
    },
    raise: function () {
        console.log('スクリーンを上げる');
    },
};

const audioSystem = {
    setVolume: function (level) {
        console.log(`音量を${level}に設定する`);
    },
    mute: function () {
        console.log('音を消す');
    },
};

const player = {
    play: function (movie) {
        console.log(`${movie}を再生する`);
    },
    stop: function () {
        console.log('再生を停止する');
    },
};

// 「観る」と「終わる」の両方をまとめたファサード
const homeTheaterFacade = {
    watchMovie: function (movie) {
        projector.turnOn();
        screen.lower();
        audioSystem.setVolume(20);
        player.play(movie);
    },
    endMovie: function () {
        player.stop();
        audioSystem.mute();
        screen.raise();
        projector.turnOff();
    },
};

// 「観る」と「終わる」、それぞれで異なる順序の複数サブシステム操作が必要だが、
// ファサードのおかげで呼び出す側は2つのメソッドを呼ぶだけでよい
homeTheaterFacade.watchMovie('コメディ映画');
console.log('---');
homeTheaterFacade.endMovie();
