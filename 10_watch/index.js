var vm = new Vue({
	el:'#demo',
	data:{
		firstName:'Foo',
		lastName:'Bar'
	},
	/*
	computed:{
		fullName:function(){
			return this.firstName + ' ' + this.lastName;
		}
	}	
	*/
	computed: {
	  fullName: {
	    // getter
	    get: function () {
	      return this.firstName + ' ' + this.lastName
	    },
	    // setter
	    set: function (newValue) {
	      var names = newValue.split(' ')
	      console.log(names);
	      this.firstName = names[0]
	      this.lastName = names[names.length - 1]
	    }
	  }
	}	
})


/*
var vm = new Vue({
	el:'#demo',
	data:{
		firstName:'Foo',
		lastName:'Bar',
		fullName:'Foo Bar'
	}
})


vm.$watch('firstName',function(val){
	this.fullName = val+ ' ' + this.lastName;
})

vm.$watch('lastName', function(val){
	this.fullName=this.firstName+' ' + val;
})
*/
