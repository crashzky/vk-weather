import { Form, Input, Modal, ModalProps } from 'antd';
import { useSelector } from 'react-redux';

import { closeModal, selectActiveModal } from '@shared/slices/modalSlice';
import { useAppDispatch } from '@shared/store';

interface IForm {
	lat: string;
	lon: string;
	name: string;
}

const SettingsGeoModal: React.FC<ModalProps> = ({ ...props }) => {
	const activeModal = useSelector(selectActiveModal);
	const dispatch = useAppDispatch();

	const [form] = Form.useForm<IForm>();
	
	return (
		<Modal
			title='Редактирование геопозиции'
			open={activeModal.modalName === 'editGeo'}
			cancelText='Отмена'
			okText='Сохранить'
			onCancel={() => dispatch(closeModal())}
			onOk={() => form.submit()}
			{...props}
		>
			<Form
				form={form}
				layout='vertical'
				onFinish={() => dispatch(closeModal())}
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

export default SettingsGeoModal;
