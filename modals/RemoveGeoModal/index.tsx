import { Modal, ModalProps } from 'antd';
import { useSelector } from 'react-redux';

import { closeModal, selectActiveModal } from '@shared/slices/modalSlice';
import { useAppDispatch } from '@shared/store';

const RemoveGeoModal: React.FC<ModalProps> = ({ ...props }) => {
	const activeModal = useSelector(selectActiveModal);
	const dispatch = useAppDispatch();

	return (
		<Modal
			title='Удалить геопозицию?'
			cancelText='Отмена'
			okText='Удалить'
			open={activeModal.modalName === 'removeGeo'}
			okButtonProps={{
				danger: true,
			}}
			onCancel={() => dispatch(closeModal())}
			onOk={() => dispatch(closeModal())}
			{...props}
		>
		</Modal>
	);
};

export default RemoveGeoModal;
