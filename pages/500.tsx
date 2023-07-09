import { Button, Result } from 'antd';
import { useRouter } from 'next/router';

const Page500: React.FC = () => {
	const router = useRouter();

	return (
		<Result
			status='500'
			title='500'
			subTitle='Извините, что-то пошло не так.'
			extra={(
				<Button type='primary' onClick={() => router.push('/')}>
					Вернуться на главную
				</Button>
			)} />
	);
};

export default Page500;
