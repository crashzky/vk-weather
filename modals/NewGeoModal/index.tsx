import { Form, Input, Modal, ModalProps } from 'antd';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@shared/store';
import { closeModal, selectActiveModal } from '@shared/slices/modalSlice';

interface IForm {
	lat: string;
	lon: string;
}

const NewGeoModal: React.FC<ModalProps> = ({ ...props }) => {
	const activeModal = useSelector(selectActiveModal);
	const dispatch = useAppDispatch();

	const [form] = Form.useForm<IForm>();

	return (
		<Modal
			title='Введите координаты геопозиции'
			cancelText='Отмена'
			okText='Готово'
			open={activeModal.modalName === 'newGeo'}
			onOk={() => form.submit()}
			onCancel={() => dispatch(closeModal())}
			{...props}
		>
			<Form
				form={form}
				layout='vertical'
				onFinish={() => dispatch(closeModal())}
			>
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

export default NewGeoModal;
