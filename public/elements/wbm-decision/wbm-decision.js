Polymer({
	value: 'someOtherValue',
	currentRoute: '',
	routes: [{
		path: 'landing',
		import: 'wbm-landing/wbm-landing',
		element: 'wbm-landing'
	}, {
		path: 'banner',
		import: 'wbm-banner/wbm-banner',
		element: 'wbm-banner'
	}, {
		path: 'microsite',
		import: 'wbm-microsite/wbm-microsite',
		element: 'wbm-microsite'
	}, {
		path: 'tooltip',
		import: 'wbm-tooltip/wbm-tooltip',
		element: 'wbm-tooltip'
	}],
	rewriteValue: function() {
		this.currentRoute = '';
	}
});