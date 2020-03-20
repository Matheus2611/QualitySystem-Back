// Vue.component('calculator', {
//     template: ` 
//      `,

//     data() {
//         return {

//         }

//     },


// },
// })

var app3 = new Vue({
    el: "#app3",

    data: {
        btn1: 1,
        btn2: 2,
        op: null,
        result: null,
        values: [],
        value1: null,
        value2: null,
        tt: null
    },

    methods: {

        total(id) {
            this.values.push(id)
            var total = this.values.reduce((total, valor) => total + valor, 0)
            this.tt = total

        },
        operation(id) {
            this.value1 = this.tt
            this.tt = null
            this.op = id
        },

        calculate() {
            this.value2 = this.tt
            this.values = null
            this.tt = null
            if (this.op == '+') {
                return this.result = this.value1 + this.value2
            }
            if (this.op == '-') {
                return this.result = this.value1 - this.value2
            }
            this.result = null
                // this.value1 = null,
                // this.value2 = null,
                // this.op = null
        }

    }

})