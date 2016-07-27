new Vue({
	el:'#app',
	data:{
		message:'Hello vue.js!'
	},
	methods:{
		reverseMessage:function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
})