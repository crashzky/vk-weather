import { Button, Result } from 'antd';
import { useRouter } from 'next/router';

const Page404: React.FC = () => {
	const router = useRouter();

	return (
		<Result
			status='404'
			title='404'
			subTitle='Извините, такой странички не существует.'
			extra={(
				<Button type='primary' onClick={() => router.push('/')}>
					Вернуться на главную
				</Button>
			)} />
	);
};

export default Page404;
