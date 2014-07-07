/* global describe, it */


(function () {
    'use strict';

    // describe('cars', function(){
	   //  it('should return a length of 1', function () {
	   //    expect('cars').to.have.length(4);
	   //  });
    // 	it('should be a an array', function() {
    // 		expect('cars').to.be.a('array');
    // 	});
    // });

    // describe('stooges', function () {
    // 	it('should be a string')
    // })
		describe('lotto', function () {
			it('should have a number between 100 and 120', function () {
				expect(lotto).to.be.within(100, 120);
			});
		});

		describe('earth', function () {
			it('should not contain forest or ocean', function () {
				expect(earth).to.not.have.members(['forest', 'ocean'])
			});
		});


		describe('decimals', function () {
			it('should be close to 1', function () {
				expect(decimals).to.be.closeTo(.5, 1.5);
			});
		});

		describe('bounty_hunter', function () {
			it('should not exist', function () {
				expect(bounty_hunter).to.not.exist;
			})
		})

		describe('prince.albums', function () {
			it('should contain purple rain', function () {
				expect(prince.albums).to.have.string('purple rain');
			});
		});
})();
