/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2019-11-06 14:07:44
 * @lastEditTime: Do not edit
 */
Vue.component('HelloWorld', {
    template: '<div>{{msg}}</div>',
    data() {
        return {
            msg: 'Hello world!'
        }
    },
    mounted () {
        console.log('hello world组件的钩子函数出发了')
    }
})

const HelloWorld = Vue.component('HelloWorld');

// const Hello = Vue.extend({
//     template: '<div>{{msg}}</div>',
//     data() {
//         return {
//             msg: 'Hello world!'
//         }
//     }
// });

// new Hello().$mount('#app')

new Vue({
    data() {
        return {
            user: {
                name: '郭军伟',
                age: 26
            }
        }
    },
    components: {
        HelloWorld
    },
    methods: {
        changeName() {
            this.user.name = 'guojunwei'
        }
    },
    mounted () {
        console.log('根Vue的mounted钩子函数');
    }
}).$mount('#app')