import { ArrowRight, Plus, Settings, Trash2 } from 'lucide-react';

import Props, { buttonIconType } from './ActionCard.props';
import { Button, ButtonsContainer, Container, Title } from './ActionCard.styles';

const ActionCard: React.FC<Props> = ({ title, size = 'm', actionButtons = [], ...props }) => {
	function getIcon(type: buttonIconType) {
		const iconProps = {
			size: 20,
			color: 'var(--dark-grey)',
		};

		switch(type) {
			case 'arrow-right':
				return <ArrowRight {...iconProps} />;
			case 'plus':
				return <Plus {...iconProps} />;
			case 'settings':
				return <Settings {...iconProps} />;
			case 'trash':
				return <Trash2 {...iconProps} />;
		}
	}

	return (
		<Container size={size} {...props}>
			<Title>
				{title}
			</Title>
			<ButtonsContainer>
				{actionButtons.map((i, num) => (
					<Button key={num} onClick={i.onClick}>
						{getIcon(i.icon)}
					</Button>
				))}
			</ButtonsContainer>
		</Container>
	);
};

export default ActionCard;
