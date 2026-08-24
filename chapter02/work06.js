// 重い処理の生成をプロキシで遅延させる（Virtual Proxy）
// 本体の生成を「本当に必要になるまで」遅らせる使い方を
// Virtual Proxy（仮想プロキシ）と呼ぶ
function createHeavyResource() {
    console.log('重いリソースを生成しました');
    return { id: 'heavy-001' };
}

// まだ何も生成されていない空のオブジェクトに対してProxyを作る
const resourceProxy = new Proxy({}, handler);

console.log('プログラム開始'); // この時点ではまだ生成されない

console.log(resourceProxy.id); // ここで初めて生成される
// 重いリソースを生成しました
// heavy-001

console.log(resourceProxy.id); // 2回目は生成されない
// heavy-001
