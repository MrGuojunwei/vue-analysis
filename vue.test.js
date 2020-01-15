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
    props: {
        propsChild: {
            type: Boolean,
            default: true
        }
    },
    inject: ['parent'],
    mounted() {
        console.log('hello world组件的钩子函数出发了');
        console.log(this.parent);
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
    el: "#app",
    data: {
        user: {
            name: '郭军伟',
            age: 26
        },
        list: [
            'apple',
            'banana',
            'orenge'
        ],
        show: 'elseif'
    },
    provide: {
        parent: 'parent'
    },
    computed: {
        newName() {
            return 'computed' + this.user.name;
        }
    },
    methods: {
        changeName() {
            this.user.name = 'guojunwei'
        }
    },
    created() {
        console.log('created')
    },
    mounted() {
        console.log('mounted');
    }
})