/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2019-11-28 09:51:37
 * @lastEditTime: Do not edit
 */
const fs = require('fs');

const readFileThunk = filename => {
    return callback => {
        fs.readFile(filename, callback);
    }
}

const gen = function* () {
    const data1 = yield readFileThunk('001.js')
    console.log(data1.toString())
    const data2 = yield readFileThunk('002.js')
    console.log(data2.toString())
    const data3 = yield readFileThunk('003.js')
    console.log(data3.toString())
}

let g = gen();

function run (gen) {
    gen.next()
}

g.next().value((err, data1) => {
    g.next(data1).value((err, data2) => {
        g.next(data2).value((err, data3) => {
            g.next(data3)
        });
    })
})

