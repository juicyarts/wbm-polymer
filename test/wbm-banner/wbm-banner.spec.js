var wbmBanner = document.querySelector('wbm-banner');

suite('<wbm-banner>', function() {
	test('element is available', function(done) {
		assert.isNotNull(wbmBanner, 'wbmBanner is Null');
		done();
	});
	test('element has Value', function(done) {
		assert.equal(wbmBanner.value, 'This is wbm banner');
		done();
	});
});