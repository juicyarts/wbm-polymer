(function(){
	Polymer({
		is: 'wbm-landing-dynamic',
		properties: {
			name: {
				type: String,
				value: 'dynamic Version'
			}
		},
		ready: function(){
			console.log('wbm-landing-dynamic is ready');
			// this.name = this.name;
		}
	})
})();
