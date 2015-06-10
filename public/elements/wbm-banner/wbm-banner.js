(function() {
	Polymer({
		routes: [{
			path: 'QuoteAd',
			import: 'wbm-banner/wbm-banner-quotead/wbm-banner-quotead',
			element: 'wbm-banner-quotead'
		}],
		ready: function() {
			this.value = 'This is wbm banner';
		}
	})
})();