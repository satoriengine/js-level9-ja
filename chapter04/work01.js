// Observerパターンを振り返る（Publisherが購読者を直接保持している）

// JSレベル8の7章で学んだObserverパターンの基本形
// observersという配列とnotifyAllという関数は、
// このtemperatureの通知専用に、この場所だけに存在している
const observers = [];

function subscribe(observerFn) {
    observers.push(observerFn);
}

function notifyAll(data) {
    observers.forEach(function (observerFn) {
        observerFn(data);
    });
}

function updateDisplay(temperature) {
    console.log(`表示を更新: ${temperature}度`);
}

subscribe(updateDisplay);
notifyAll(25);
// 表示を更新: 25度
