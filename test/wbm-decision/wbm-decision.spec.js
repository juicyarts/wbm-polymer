var myEl = document.getElementById('test');

suite('<wbm-decision>', function() {
	test('element is available', function(done) {
		assert.isNotNull(myEl, 'myEl is Null');
		done();
	});
	test('knows the value', function(done) {
		assert.equal(myEl.value, 'someOtherValue');
		done();
	});
	test('has an array of routes', function(done) {
		assert.isAbove(myEl.routes.length, 0, 'routeLength is beneath 0');
		done();
	});
});