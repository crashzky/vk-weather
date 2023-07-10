import { Form, Input, Modal } from 'antd';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@shared/store';
import { closeModal, selectActiveModal } from '@shared/slices/modalSlice';
import { addPosition } from '@shared/slices/positionsSlice';

import Props from './NewPositionModal.props';

interface IForm {
	name: string;
	lat: string;
	lon: string;
}

const NewPositionModal: React.FC<Props> = ({ messageApi, ...props }) => {
	const activeModal = useSelector(selectActiveModal);

	const dispatch = useAppDispatch();

	const [form] = Form.useForm<IForm>();

	const onFinish = (values: IForm) => {
		const { name, lat, lon } = values;

		dispatch(addPosition({
			name,
			lat: +lat,
			lon: +lon,
		}));
		dispatch(closeModal());
		messageApi.success('Геопозиция создана');
	};

	return (
		<Modal
			title='Создание новой геопозиции'
			cancelText='Отмена'
			okText='Готово'
			open={activeModal.modalName === 'newPosition'}
			onOk={() => form.submit()}
			onCancel={() => dispatch(closeModal())}
			{...props}
		>
			<Form
				form={form}
				layout='vertical'
				onFinish={onFinish}
			>
				<Form.Item
					name='name'
					label='Название геопозиции'
					required
					rules={[{ required: true, message: 'Заполните это поле' }]}
				>
					<Input placeholder='Название геопозиции' />
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

export default NewPositionModal;
