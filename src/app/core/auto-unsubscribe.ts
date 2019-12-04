// 自定取消订阅，如果有某些订阅在组件销毁还不取消订阅的话，传入 对应的观察者名称
export function AutoUnsubscribe(blackList = []) {
    return function (constructor) {
        // const original = constructor.prototype.ngOndestroy;
        // constructor.prototype.ngOndestroy =  function () {
        //   console.log(222);

        //     for (const [key, value] of Object.entries(this)) {
        //         const property = value;
        //         if (!blackList.includes(key)) {
        //             if (property && (typeof property.unsubscribe === 'function')) {
        //                 property.unsubscribe();
        //             }
        //         }
        //      }
        //     // tslint:disable-next-line:no-unused-expression
        //     original && (typeof original === 'function') && original.apply(this, arguments);
        // };
    };
}
