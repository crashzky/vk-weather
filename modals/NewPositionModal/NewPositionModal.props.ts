import { ModalProps } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';

interface Props extends ModalProps {
	messageApi: MessageInstance;
}

export default Props;
