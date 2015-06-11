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

		if (loc !== '') {
			this.urlMatching(loc, function(newLoc) {
				self.makeDecision(self.getDecisionParams(newLoc));
			});
		} else {
			this.makeDecision(this.getDecisionParams());
		}
	},
	urlMatching: function(loc, cb) {
		var newloc = {};
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
	getDecisionParams: function(params) {
		// get params from db by affiliateId if given
		// someFancyAjaxFunctionToGetDataFromTheDatabase
		var dbResponse = {}
		if (params) {
			// get request with params
		} else {
			// get request without params
		}

		// fake db response
		if (params) {
			return dbResponse = {
				type: params.type,
				aId: params.aId,
				variant: params.variant,
				competition: 12,
				team: 209,
				locale: 'deDE'
			};
		} else {
			return dbResponse = {
				type: 'landing',
				aId: 1337867,
				variant: 'static',
				co: 12,
				te: 209,
				locale: 'deDE'
			};
		}
	},
	makeDecision: function(params) {
		console.log(params);
		// make a url decision depending on given params
		var url = params.aId + '/' + params.type + '/' + params.variant + '/?co=' + params.co + '&te=' + params.te;
		window.location.hash = '#!/' + url;
	}
});
