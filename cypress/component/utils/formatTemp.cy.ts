import formatTemp from '@utils/formatTemp';

describe('formatTemp util', () => {
	it('If temp > 0', () => {
		expect(formatTemp(15)).eq('+15');
		expect(formatTemp(0.01)).eq('0');
		expect(formatTemp(0.64)).eq('+1');
		expect(formatTemp(12.75)).eq('+13');
	});

	it('If temp = 0', () => {
		expect(formatTemp(0)).eq('0');
	});

	it('If temp < 0', () => {
		expect(formatTemp(-15)).eq('-15');
		expect(formatTemp(-0.01)).eq('0');
		expect(formatTemp(-0.64)).eq('-1');
		expect(formatTemp(-12.75)).eq('-13');
	});
});
