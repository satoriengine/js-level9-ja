// PublisherとSubscriberが直接依存してしまう問題

// 問題点：
// 通知したい対象（温度・在庫）が増えるたびに、
// observers配列・subscribe関数・notify関数のセットを、毎回新しく作る必要がある

// 「温度」の通知の仕組み
const temperatureObservers = [];

function subscribeTemperature(fn) {
    temperatureObservers.push(fn);
}

function notifyTemperature(data) {
    temperatureObservers.forEach(function (fn) {
        fn(data);
    });
}

// 「在庫」の通知の仕組み（似た構造をもう一度書く必要がある）
const stockObservers = [];

function subscribeStock(fn) {
    stockObservers.push(fn);
}

function notifyStock(data) {
    stockObservers.forEach(function (fn) {
        fn(data);
    });
}

subscribeTemperature(function (t) {
    console.log(`温度: ${t}度`);
});
subscribeStock(function (s) {
    console.log(`在庫: ${s}個`);
});

notifyTemperature(28);
notifyStock(5);
