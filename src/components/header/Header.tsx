import { FC } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import spinner from '../../assets/spinner.gif';

export type TCHeader = {
	isLoading?: boolean;
	className?: string;
};

export const CHeader: FC<TCHeader> = (
	{ className, isLoading } = { isLoading: false }
) => {
	return (
		<header className={className}>
			<Link to='/'>Podcaster</Link>
			{isLoading && <img src={spinner} alt='spinner' height={40} />}
		</header>
	);
};

export const SCHeader = styled(CHeader)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid black;
	margin-bottom: 10px;
	padding: 0.5rem;
`;
