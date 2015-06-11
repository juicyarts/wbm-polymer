Polymer({
	is: 'wbm-decision',
	properties: {
		modName: {
			type: String,
			value: 'wbm-decision'
		},
		path: {
			type: String,
			value: '',
			notify: true
		},
		matchers: {
			type: Array,
			value: [{
				"key": "aId",
				"type": "regEx",
				"matchers": /(^[^a-z][\d]+$)/
			}, {
				"key": "format",
				"type": "regEx",
				"matchers": /((\d{2,4})[x](\d{2,4}))/
			}, {
				"key": "aId",
				"matchers": ["affiliateId", "aId"]
			}, {
				"key": "format",
				"matchers": ["hresponsive", "responsive", "mobile", "desktop"]
			}, {
				"key": "type",
				"matchers": ["landing", "banner", "microsite", "tooltip"]
			}, {
				"key": "variant",
				"matchers": ["static", "dynamic", "bonus", "gws", "quotead", "fallback"]
			}]
		}
	},
	ready: function() {
		this.analyseRouteParams();
	},
	analyseRouteParams: function() {
		var self = this;
		// read location params for further processing
		var loc = window.location.hash;
		// remove trailing #!/hashbang and split via '/'
		if (loc.indexOf('#!/') >= 0) {
			loc = loc.split('#!/')[1].split('/');
		}
		/**
		 * urlMatcher
		 * @param  {Array} newLoc){		} [takes given route params]
		 * @return {Array}               [returns matching values]
		 */
		if (loc !== '') {
			this.urlMatching(loc, function(newLoc) {
				self.getDecisionParams(newLoc);
			});
		} else {
			this.getDecisionParams();
		}
	},
	urlMatching: function(loc, cb) {
		// hard code some Url Matchers that are known to the system
		var newloc = {};

		/**
		 * For Each object in given Route Params Array
		 * @param  {Number} var i iterate
		 * @return {String} return matching string
		 */
		for (var i = 0; i < loc.length; i++) {
			for (var j = 0; j < this.matchers.length; j++) {
				if (this.matchers[j].type === 'regEx') {
					if (loc[i].match(this.matchers[j].matchers)) {
						console.log('found matching param', loc[i], 'for key', this.matchers[j].key);
						newloc[this.matchers[j].key] = loc[i];
					}
				} else {
					for (var k = 0; k < this.matchers[j].matchers.length; k++) {
						if (loc[i].indexOf(this.matchers[j].matchers[k]) >= 0) {
							console.log('found matching param', loc[i], 'for key', this.matchers[j].key);
							if (this.matchers[j].key === 'aId') {
								newloc[this.matchers[j].key] = loc[i].split(this.matchers[j].matchers[k])[1];
							} else {
								newloc[this.matchers[j].key] = loc[i];
							}
						}
					}
				};
			};
		};
		cb(newloc);
	},
	makeDecision: function() {
		// make decision depending on db-response
	},
	getDecisionParams: function(params) {
		console.log(params);
		// get params from db by affiliateId if given
		// someFancyAjaxFunctionToGetDataFromTheDatabase
		var ddResponse = {}
		if (params) {
			// get request with params
		} else {
			// get request without params
		}
	}
});
