(function() {
	Polymer({
		is: 'wbm-landing',
		properties: {
			routes: {
				type: Array,
				value: [{
					"path": "static",
					"prePath": "/:aId/landing/",
					"import": "wbm-landing/wbm-landing-static/wbm-landing-static",
					"element": "wbm-landing-static"
				}, {
					"path": "dynamic",
					"prePath": "/:aId/landing/",
					"import": "wbm-landing/wbm-landing-dynamic/wbm-landing-dynamic",
					"element": "wbm-landing-dynamic"
				}, {
					"path": "gws",
					"prePath": "/:aId/landing/",
					"import": "wbm-landing/wbm-landing-gws/wbm-landing-gws",
					"element": "wbm-landing-gws"
				}, {
					"path": "bonus",
					"prePath": "/:aId/landing/",
					"import": "wbm-landing/wbm-landing-bonus/wbm-landing-bonus",
					"element": "wbm-landing-bonus"
				}]
			}
		},
		ready: function() {
			this.value = 'This is wbm landing';
			console.log('landing router, ', this.$.wbmLandingRouter);
			this.$.wbmLandingRouter.init();
			console.log('landing router, ', this.$.wbmLandingRouter);
		},
		computeRouterPath: function(prepath, path) {
			return prepath + path ;
		},
		computeRouterImport: function(importPath) {
			return 'elements/' + importPath + '.html';
		}
	})
})();
