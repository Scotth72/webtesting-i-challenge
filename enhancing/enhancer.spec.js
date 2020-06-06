const enhancer = require('./enhancer.js');
// test away!

describe('enhancer', () => {
	describe('repair', () => {
		it('restores object durability to 100', () => {
			const item = {
				name: 'player1',
				durability: 50,
				enhancement: 15
			};

			expect(item.durability).toBe(50);
			enhancer.repair(item);
			expect(item.durability).toBe(100);
		});
	});
	it('succeed test'),
		() => {
			it('increase of the enhancement by 1', () => {
				const item = {
					name: player1,
					durability: 50,
					enhancement: 5
				};
				expect(enhancer.success(item).enhancement).toBe(6);
			});
		};
});
