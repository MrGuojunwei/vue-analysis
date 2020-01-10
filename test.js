/*
 * @Description: 实现promise
 * @Author: 郭军伟
 * @Date: 2019-11-26 11:13:52
 * @lastEditTime: Do not edit
 */
const fs = require('fs');

class _Promise {
    callbacks = [];
    state = 'pending';//增加状态
    value = null;//保存结果
    constructor(fn) {
        fn(this._resolve.bind(this));
    }
    then(onFulfilled) {
        return new Promise(resolve => {
            this._handle({
                onFulfilled: onFulfilled || null,
                resolve: resolve
            });
        });
    }
    _handle(callback) {
        if (this.state === 'pending') {
            this.callbacks.push(callback);
            return;
        }
        //如果then中没有传递任何东西
        if (!callback.onFulfilled) {
            callback.resolve(this.value);
            return;
        }
        var ret = callback.onFulfilled(this.value);
        callback.resolve(ret);
    }
    _resolve(value) {

        if (value && (typeof value === 'object' || typeof value === 'function')) {
            var then = value.then;
            if (typeof then === 'function') {
                then.call(value, this._resolve.bind(this));
                return;
            }
        }

        this.state = 'fulfilled';//改变状态
        this.value = value;//保存结果
        this.callbacks.forEach(callback => this._handle(callback));
    }

}

const mockAjax = (url, s, callback) => {
    setTimeout(() => {
        callback(url + '异步请求耗时' + s + '秒');
    }, 1000 * s)
}

new Promise(resolve => {
    mockAjax('getUserId', 1, function (result) {
        resolve(result);
    })
}, 'first').then(result => {
    console.log(result);
});

// let readFilePromise = (filename) => {
//     return new _Promise((resolve, reject) => {
//         fs.readFile(filename, (err, data) => {
//             if (!err) {
//                 resolve(data);
//             } else {
//                 reject(err);
//             }
//         })
//     })
// }
// readFilePromise('./001.js').then(data => {
//     console.log(data.toString());
//     return readFilePromise('./002.js');
// }).then(data => {
//     console.log(data.toString());
// })