// 複数のチャンネル（topic）を扱えるEventBusにする

// 1つのeventBusだけで、"temperature"と"stock"という
// 異なる種類の通知を、混ざらずに扱えるようになった

eventBus.subscribe('temperature', function (data) {
    console.log(`温度チャンネル: ${data}度`);
});

eventBus.subscribe('stock', function (data) {
    console.log(`在庫チャンネル: ${data}個`);
});

eventBus.publish('temperature', 28);
// 温度チャンネル: 28度

eventBus.publish('stock', 5);
// 在庫チャンネル: 5個
