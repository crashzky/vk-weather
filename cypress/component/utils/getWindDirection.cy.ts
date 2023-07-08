import getWindDirection from '@utils/getWindDirection';

describe('getWindDirection util', () => {
	it('getWindDirection util', () => {
		expect(getWindDirection('c')).eq('');
		expect(getWindDirection('e')).eq('В');
		expect(getWindDirection('n')).eq('С');
		expect(getWindDirection('s')).eq('Ю');
		expect(getWindDirection('w')).eq('З');
		expect(getWindDirection('ne')).eq('СВ');
		expect(getWindDirection('nw')).eq('СЗ');
		expect(getWindDirection('se')).eq('ЮВ');
		expect(getWindDirection('sw')).eq('ЮЗ');
	});
});
