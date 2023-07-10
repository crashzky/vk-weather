import { Modal } from 'antd';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@shared/store';
import { closeModal, selectActiveModal } from '@shared/slices/modalSlice';
import { removePosition } from '@shared/slices/positionsSlice';

import Props from './RemovePositionModal.props';

const RemovePositionModal: React.FC<Props> = ({ messageApi, ...props }) => {
	const activeModal = useSelector(selectActiveModal);
	const dispatch = useAppDispatch();

	const onOk = () => {
		dispatch(removePosition(activeModal.payload));
		dispatch(closeModal());
		messageApi.success('Геопозиция удалена');
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
