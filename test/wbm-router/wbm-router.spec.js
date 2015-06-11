var wbmRouter = document.querySelector('wbm-router');

suite('<wbm-Router>', function() {


	test('element is available', function(done) {
		assert.isNotNull(wbmRouter, 'wbmRouter is Null');
		done();
	});
	test('knows the value', function(done) {
		assert.equal(wbmRouter.value, 'someOtherValue');
		done();
	});
	test('current route is empty', function(done) {
		assert.equal(wbmRouter.currentRoute, undefined);
		done();
	});
	test('has an array of routes', function(done) {
		assert.isAbove(wbmRouter.routes.length, 0, 'routeLength is beneath 0');
		done();
	});
	test('can compute Route Path for <li>', function(done) {
		expect(wbmRouter.computeRoutePath('test')).to.equal('#!/12345/test');
		done();
	});
	test('can compute Router Path for <app-router>', function(done) {
		expect(wbmRouter.computeRouterPath('/:aId/', 'landing', '/:type')).to.equal('/:aId/landing/:type');
		done();
	});
	test('can compute Router Imports for <app-router>', function(done) {
		expect(wbmRouter.computeRouterImport('wbm-landing/wbm-landing')).to.equal('elements/wbm-landing/wbm-landing.html');
		done();
	});

	suite('route Change', function() {
		test('can rewrite the Route', function(done) {
			wbmRouter.rewriteRoute();
			assert.equal(wbmRouter.currentRoute, '', 'rewrite Route failed');
			done();
		});
		test('listens to route change event', function(done) {
			sinon.spy(wbmRouter, 'routeChanged');

			wbmRouter.currentRoute = {
				"path": "banner",
				"prePath": "/:aId/",
				"postPath": "/:type/:format/",
				"import": "wbm-banner/wbm-banner",
				"element": "wbm-banner"
			};
			expect(wbmRouter.routeChanged.calledOnce).to.be.true;
			done();
		});
	});

});
