import { Button } from 'antd';
import { useGeolocated } from 'react-geolocated';

import { useAppDispatch } from '@shared/store';
import { openModal } from '@shared/slices/modalSlice';
import ActionCard from '@components/ActionCard';

import NewGeoModal from '@modals/NewGeoModal';
import RemoveGeoModal from '@modals/RemoveGeoModal';
import SettingsGeoModal from '@modals/SettingsGeoModal';

import { CardsContainer, ErrorMessage, Main, Title } from '@styles/pages/main.styles';

const MainPage: React.FC = () => {
	const dispatcher = useAppDispatch();

	const { coords, isGeolocationAvailable, isGeolocationEnabled, getPosition } = useGeolocated();

	return (
		<Main>
			<NewGeoModal />
			<RemoveGeoModal />
			<SettingsGeoModal />

			<Title>
				Выберите геопозицию
			</Title>
			<CardsContainer>
				<ActionCard
					title='Текущая геопозиция'
					size='l'
					actionButtons={[
						{
							icon: 'arrow-right',
							onClick: () => null,
						},
					]} />
				<ActionCard
					title='Текущая геопозиция'
					size='l'
					actionButtons={[
						{
							icon: 'settings',
							onClick: () => dispatcher(openModal({ modalName: 'editGeo', payload: null })),
						},
						{
							icon: 'trash',
							onClick: () => dispatcher(openModal({ modalName: 'removeGeo', payload: null })),
						},
						{
							icon: 'arrow-right',
							onClick: () => null,
						},
					]} />
				<ActionCard
					title='добавить новую'
					actionButtons={[
						{
							icon: 'plus',
							onClick: () => dispatcher(openModal({ modalName: 'newGeo', payload: null })),
						},
					]} />
			</CardsContainer>
			{!isGeolocationEnabled && (
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
			{(!isGeolocationAvailable && typeof window !== 'undefined') && (
				<ErrorMessage>
					К сожалению, ваш браузер не поддерживает автоопределение геопозиции, но вы всё ещё можете задать
					геопозицию в ручную.
				</ErrorMessage>
			)}
		</Main>
	);
};

export default MainPage;
