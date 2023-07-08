function formatTemp(temp: number): string {
	temp = Math.round(temp);

	if(temp > 0)
		return `+${temp}`;
	else if(temp === 0)
		return '0';
	else
		return temp.toString();
}

export default formatTemp;
