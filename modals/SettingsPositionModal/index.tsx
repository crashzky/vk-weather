import { useEffect } from 'react';
import { Form, Input, Modal } from 'antd';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '@shared/store';
import { closeModal, selectActiveModal } from '@shared/slices/modalSlice';
import { selectOtherPositionById, updatePostition } from '@shared/slices/positionsSlice';

import Props from './SettingsPositionModal.props';

interface IForm {
	lat: string;
	lon: string;
	name: string;
}

const SettingsPositionModal: React.FC<Props> = ({ messageApi, ...props }) => {
	const activeModal = useSelector(selectActiveModal);
	const currentPosition = useSelector((state: RootState) => selectOtherPositionById(state, activeModal.payload));

	const dispatch = useAppDispatch();

	const [form] = Form.useForm<IForm>();

	const onFinish = (values: IForm) => {
		const { name, lat, lon } = values;

		dispatch(updatePostition({
			id: activeModal.payload,
			position: {
				name,
				lat: +lat,
				lon: +lon,
			},
		}));
		dispatch(closeModal());
		messageApi.success('Геопозиция обновлена');
	};

	useEffect(() => {
		if(currentPosition) {
			const { name, lat, lon } = currentPosition;
		
			form.setFieldsValue({
				name,
				lat: lat.toString(),
				lon: lon.toString(),
			});
		}
	}, [currentPosition]);
	
	return (
		<Modal
			title='Редактирование геопозиции'
			open={activeModal.modalName === 'editPosition'}
			cancelText='Отмена'
			okText='Сохранить'
			onCancel={() => dispatch(closeModal())}
			onOk={() => form.submit()}
			{...props}
		>
			<Form
				form={form}
				layout='vertical'
				onFinish={onFinish}
			>
				<Form.Item
					name='name'
					label='Название'
					required
					rules={[{ required: true, message: 'Заполните это поле' }]}
				>
					<Input placeholder='Название' />
				</Form.Item>
				<Form.Item
					name='lat'
					label='Широта (lat)'
					required
					rules={[{ required: true, message: 'Заполните это поле' }]}
				>
					<Input type='number' placeholder='Широта (lat)' />
				</Form.Item>
				<Form.Item
					name='lon'
					label='Долгота (lon)'
					required
					rules={[{ required: true, message: 'Заполните это поле' }]}
				>
					<Input type='number' placeholder='Долгота (lon)' />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default SettingsPositionModal;
