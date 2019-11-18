new Vue({
    el: '#app',
    data () {
        return {
            user: {
                name: '郭军伟',
                age: 26
            }
        }
    },
    methods:{
        changeName () {
            this.user.name = 'guojunwei'
        }
    }
})