import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useGeolocated } from 'react-geolocated';
import { Button, message } from 'antd';

import ActionCard from '@components/ActionCard';
import { useAppDispatch } from '@shared/store';
import { openModal } from '@shared/slices/modalSlice';
import { addInitialPosition, selectInitialPosition, selectOtherPositions } from '@shared/slices/positionsSlice';
import { selectPageLoaded, setPageLoaded } from '@shared/slices/pageLoadedSlice';

import NewPositionModal from '@modals/NewPositionModal';
import RemovePositionModal from '@modals/RemovePositionModal';
import SettingsPositionModal from '@modals/SettingsPositionModal';

import { CardsContainer, ErrorMessage, Main, Title } from '@styles/pages/main.styles';

const MainPage: React.FC = () => {
	const pageLoaded = useSelector(selectPageLoaded);
	const initialPosition = useSelector(selectInitialPosition);
	const otherPositions = useSelector(selectOtherPositions);

	const dispatch = useAppDispatch();

	const router = useRouter();

	const [messageApi, contextHolder] = message.useMessage();

	const { isGeolocationAvailable, isGeolocationEnabled, getPosition } = useGeolocated({
		watchLocationPermissionChange: true,
		onSuccess: (position) => {
			const { latitude, longitude } = position.coords;

			dispatch(addInitialPosition({
				lat: latitude,
				lon: longitude,
			}));
		},
	});

	useEffect(() => {
		dispatch(setPageLoaded());
	}, []);

	return (
		<Main>
			{contextHolder}
			<NewPositionModal messageApi={messageApi} />
			<RemovePositionModal messageApi={messageApi} />
			<SettingsPositionModal messageApi={messageApi} />

			<Title>
				Выберите геопозицию
			</Title>
			<CardsContainer>
				{(initialPosition && pageLoaded) && (
					<ActionCard
						title={initialPosition.name}
						size='l'
						actionButtons={[
							{
								icon: 'arrow-right',
								onClick: () => router.push('/initial'),
							},
						]} />
				)}
				{(otherPositions && pageLoaded) && otherPositions.map((i, num) => (
					<ActionCard
						key={num}
						title={i.name}
						size='l'
						actionButtons={[
							{
								icon: 'settings',
								onClick: () => dispatch(openModal({ modalName: 'editPosition', payload: num })),
							},
							{
								icon: 'trash',
								onClick: () => dispatch(openModal({ modalName: 'removePosition', payload: num })),
							},
							{
								icon: 'arrow-right',
								onClick: () => router.push(`/${num}`),
							},
						]} />
				))}
				<ActionCard
					title='добавить новую'
					actionButtons={[
						{
							icon: 'plus',
							onClick: () => dispatch(openModal({ modalName: 'newPosition', payload: null })),
						},
					]} />
			</CardsContainer>
			{(!isGeolocationEnabled && !initialPosition) && (
				<>
					<ErrorMessage>
						Вы не разрешили доступ к геопозиции. Без этого мы не сможем показать погоду по вашему
						текущему адресу. Пожалуйста, нажмите кнопку ниже и разрешите доступ.
					</ErrorMessage>
					<Button type='primary' onClick={() => getPosition()}>
						Разрешить доступ к данными геопозиции
					</Button>
				</>
			)}
			{(!isGeolocationAvailable && pageLoaded) && (
				<ErrorMessage>
					К сожалению, ваш браузер не поддерживает автоопределение геопозиции, но вы всё ещё можете задать
					геопозицию вручную.
				</ErrorMessage>
			)}
		</Main>
	);
};

export default MainPage;
