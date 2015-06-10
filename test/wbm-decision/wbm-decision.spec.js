var wbmDecision = document.querySelector('wbm-decision');

suite('<wbm-decision>', function() {
	test('element is available', function(done) {
		assert.isNotNull(wbmDecision, 'wbmDecision is Null');
		done();
	});
	test('knows the value', function(done) {
		assert.equal(wbmDecision.value, 'someOtherValue');
		done();
	});
	test('has an array of routes', function(done) {
		assert.isAbove(wbmDecision.routes.length, 0, 'routeLength is beneath 0');
		done();
	});
	test('can rewrite the Route', function(done) {
		wbmDecision.rewriteRoute();
		assert.equal(wbmDecision.currentRoute, '', 'rewrite Route failed');
		done();
	});
});