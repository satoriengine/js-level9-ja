// エラー処理も窓口にまとめる
const player = {
    play: function (movie) {
        if (!movie) {
            throw new Error('movieが指定されていません');
        }
        console.log(`${movie}を再生する`);
    },
};

const projector = {
    turnOn: function () {
        console.log('プロジェクターの電源を入れる');
    },
};

// エラーが起きた場合の処理も、ファサードの中にまとめておく
const homeTheaterFacade = {
    watchMovie: function (movie) {
        try {
            projector.turnOn();
            player.play(movie);
        } catch (error) {
            console.log(`再生できませんでした: ${error.message}`);
        }
    },
};

// movieを指定するので正しく動作する
homeTheaterFacade.watchMovie('ラブストーリー');
console.log('---');

// movieを渡し忘れた場合、エラーになる
// 呼び出す側は、try/catchを自分で書く必要がなく、
// エラーが起きたときの振る舞いも、ファサードにすべて任せられる
homeTheaterFacade.watchMovie();
