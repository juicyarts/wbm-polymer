(function(){
	Polymer({
		is: 'wbm-landing-static',
		properties: {
			name: {
				type: String,
				value: 'Static Version'
			}
		},
		ready: function(){
			console.log('wbm-landing-static is ready');
			// this.name = this.name;
		}
	})
})();
