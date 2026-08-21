// ファサードの内部だけを差し替える（呼び出し側への影響なし）
const oldPlayer = {
    play: function (movie) {
        console.log(`[旧プレイヤー] ${movie}を再生する`);
    },
};

const newPlayer = {
    startPlayback: function (movie) {
        console.log(`[新プレイヤー] ${movie}の再生を開始する`);
    },
};

// ファサードの中身だけを新しいプレイヤーに差し替える
const homeTheaterFacade = {
    watchMovie: function (movie) {
        // oldPlayer.play(movie); // 旧プレイヤーを使っていた場合
        newPlayer.startPlayback(movie); // 新プレイヤーに差し替えた
    },
};

// 呼び出す側のコードは、旧プレイヤーの頃から一切変わっていない
// ファサードの外から見た呼び出し方（watchMovieを呼ぶ）は変わらないまま、
// 内部で使うサブシステムだけを自由に入れ替えられる
homeTheaterFacade.watchMovie('ホラー映画');
