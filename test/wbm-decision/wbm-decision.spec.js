var wbmDecision = document.querySelector('wbm-decision');

suite('<wbm-decision>', function() {
	wbmDecision.env = 'test';

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


	suite('analyseRouteParams fn', function() {
		test('should run getDecisionParams directly if no path parameters are given', function(done) {
			sinon.spy(wbmDecision, 'getDecisionParams');
			wbmDecision.ready();
			expect(wbmDecision.getDecisionParams.calledOnce).to.be.true;
			done();
		});
		test('should run urlMatching if path paramters are given', function(done) {
			window.location.hash = 'aId/12345/landing';
			sinon.spy(wbmDecision, 'urlMatching');
			wbmDecision.ready();
			expect(wbmDecision.urlMatching.calledOnce).to.be.true;
			done();
		});
	});

	suite('urlMatching fn', function() {
		test('should return params object', function(done) {
			wbmDecision.urlMatching(['aId', '12345', 'landing'], function(newloc) {
				expect(newloc).to.be.defined;
				expect(newloc).to.be.a('object');
				done();

			});
		});
	});

	suite('getDecisionParams', function() {
		test('should get Db decisions depending on given parameters ', function() {

		});

		test('and return a response Object with required params', function(done) {
			// sinon.spy(wbmDecision, 'getDecisionParams');
			window.location.hash = '';
			expect(wbmDecision.getDecisionParams()).to.be.a('Object');
			expect(wbmDecision.getDecisionParams()).to.include.keys('type');
			expect(wbmDecision.getDecisionParams()).to.include.keys('aId');
			expect(wbmDecision.getDecisionParams()).to.include.keys('variant');
			expect(wbmDecision.getDecisionParams()).to.include.keys('locale');
			done();
		});

	});


});
