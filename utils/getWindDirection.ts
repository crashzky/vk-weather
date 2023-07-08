import { weatherWindDir } from '@models/weather.model';

function getWindDirection(direction: weatherWindDir): string {
	switch(direction) {
		case 'c':
			return '';
		case 'e':
			return 'В';
		case 'n':
			return 'С';
		case 's':
			return 'Ю';
		case 'w':
			return 'З';
		case 'ne':
			return 'СВ';
		case 'nw':
			return 'СЗ';
		case 'se':
			return 'ЮВ';
		case 'sw':
			return 'ЮЗ';
	}
}

export default getWindDirection;
