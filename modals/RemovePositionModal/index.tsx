import { Modal, ModalProps } from 'antd';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@shared/store';
import { closeModal, selectActiveModal } from '@shared/slices/modalSlice';
import { removePosition } from '@shared/slices/positionsSlice';

const RemovePositionModal: React.FC<ModalProps> = ({ ...props }) => {
	const activeModal = useSelector(selectActiveModal);
	const dispatch = useAppDispatch();

	const onOk = () => {
		dispatch(removePosition(activeModal.payload));
		dispatch(closeModal());
	};

	return (
		<Modal
			title='Удалить геопозицию?'
			cancelText='Отмена'
			okText='Удалить'
			open={activeModal.modalName === 'removePosition'}
			okButtonProps={{
				danger: true,
			}}
			onCancel={() => dispatch(closeModal())}
			onOk={onOk}
			{...props}
		>
		</Modal>
	);
};

export default RemovePositionModal;
