import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	const data = await axios.get('https://api.weather.yandex.ru/v2/forecast', {
		params: req.query,
		headers: {
			'X-Yandex-API-Key': process.env.WEATHER_API_KEY,
		},
	}).then((res) => res.data);
	
	res.send(data);
};

export default handler;
