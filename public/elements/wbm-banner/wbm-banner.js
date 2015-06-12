(function() {
	Polymer({
		is: 'wbm-banner',
		properties: {
			routes: {
				type: Array,
				value: [{
					"path": "quote",
					"prePath": "/:aId/banner/",
					"import": "wbm-banner/wbm-banner-quote/wbm-banner-quote",
					"element": "wbm-landing-quote"
				}, {
					"path": "live",
					"prePath": "/:aId/banner/",
					"import": "wbm-banner/wbm-banner-live/wbm-banner-live",
					"element": "wbm-banner-live"
				}]
			}
		},
		ready: function() {
			this.value = 'This is wbm banner';
			var self = this;
			window.setTimeout(function() {
				self.$.wbmBannerRouter.init();
			});
		},
		computeRouterPath: function(prepath, path) {
			return prepath + path;
		},
		computeRouterImport: function(importPath) {
			return 'elements/' + importPath + '.html';
		},
		redirectPath: function(aid){
			return '/' + aid + '/banner/quote';
		}
	})
})();
