Polymer({
	is: 'wbm-router',
	properties: {
		value: {
			type: String,
			value: 'someOtherValue'
		},
		currentRoute: {
			type: Object,
			value: undefined,
			observer: 'routeChanged',
			notify: true
		},
		routes: {
			type: Array,
			observer: 'routeChanged',
			notify: true,
			value: [{
				"path": "landing",
				"prePath": "/:aId/",
				"postPath": "/:type", // gws / dynamic / static / bonus
				"import": "wbm-landing/wbm-landing",
				"element": "wbm-landing"
			}, {
				"path": "banner",
				"prePath": "/:aId/",
				"postPath": "/:type/:variant/",
				"import": "wbm-banner/wbm-banner",
				"element": "wbm-banner"
			}, {
				"path": "microsite",
				"prePath": "/:aId/",
				"postPath": "",
				"import": "wbm-microsite/wbm-microsite",
				"element": "wbm-microsite"
			}, {
				"path": "tooltip",
				"prePath": "/:aId/",
				"postPath": "",
				"import": "wbm-tooltip/wbm-tooltip",
				"element": "wbm-tooltip"
			}]
		}
	},
	computeRoutePath: function(path){
		return '#!/12345/' + path;
	},
	computeRouterPath:function(prepath, path, postpath){
		return prepath + path + postpath;
	},
	computeRouterImport:function(importPath){
		return 'elements/' + importPath + '.html';
	},
	routeChanged: function(newVal, oldVal){
	},
	rewriteRoute: function() {
		this.currentRoute = '';
	}
});
