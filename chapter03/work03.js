// ファサード経由で複雑さを隠す
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

// 4つのサブシステムをまとめて操作する、シンプルな窓口オブジェクト
const homeTheaterFacade = {
    watchMovie: function (movie) {
        projector.turnOn();
        screen.lower();
        audioSystem.setVolume(20);
        player.play(movie);
    },
};

// homeTheaterFacadeという「窓口」を経由することで、
// 呼び出す側は個々のサブシステムの存在すら意識しなくてよくなる
homeTheaterFacade.watchMovie('SF映画');
