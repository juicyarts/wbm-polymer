var wbmDecision = document.querySelector('wbm-decision');

suite('<wbm-decision>', function() {
	test('element is available', function(done) {
		assert.isNotNull(wbmDecision, 'wbmDecision is Null');
		done();
	});
	test('has modName property', function(done) {
		assert.equal(wbmDecision.modName, 'wbm-decision');
		done();
	});
	test('has empty Path property', function(done) {
		assert.equal(wbmDecision.path, '');
		done();
	});

	test('has matchers Array', function(done) {
		assert.isAbove(wbmDecision.matchers.length, 0, 'mathcers array is empty');
		done();
	});

	test('should run analyseRouteParams fn', function(done) {
		sinon.spy(wbmDecision, 'analyseRouteParams');

		wbmDecision.ready();
		expect(wbmDecision.analyseRouteParams.calledOnce).to.be.true;
		done();
	});

});
