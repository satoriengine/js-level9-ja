/*
ワーク07_練習問題

以下の手順でコードを作成してください。

1. connectServer関数を作成します。実行すると "サーバーに接続する" と表示してください。
2. loadVideoData関数を作成します。引数として videoName を受け取り、"${videoName}のデータを読み込む" と表示してください。
3. startBuffering関数を作成します。実行すると "バッファリングを開始する" と表示してください。
4. videoFacadeオブジェクトを作成します。playメソッドの中で、connectServer、loadVideoData(videoName)、startBufferingの順番で呼び出してください。

実行結果のように表示する処理を作成してください。

実行結果
サーバーに接続する
旅行記のデータを読み込む
バッファリングを開始する
*/

function connectServer() {
    // "サーバーに接続する" と表示する
    console.log('サーバーに接続する');
}

function loadVideoData(videoName) {
    // "${videoName}のデータを読み込む" と表示する
    console.log(`${videoName}のデータを読み込む`);
}

function startBuffering() {
    // "バッファリングを開始する" と表示する
    console.log('バッファリングを開始する');
}

const videoFacade = {
    play: function (videoName) {
        // connectServer、loadVideoData、startBufferingの順に呼び出す
        connectServer();
        loadVideoData(videoName);
        startBuffering();
    },
};

// 以降の部分は変更してはいけません
videoFacade.play('旅行記');
