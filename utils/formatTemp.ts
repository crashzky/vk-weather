export function formatTemp(temp: number): string {
	if(temp > 0)
		return `+${temp}`;
	else if(temp === 0)
		return '0';
	else
		return temp.toString();
}
