import { styled } from 'styled-components';
import { useAppSelector } from '../../../store/hooks';
import { FC } from 'react';

interface ITotalEpisodes {
	className?: string;
	$boxShadow: string;
}

export const TotalEpisodes: FC<ITotalEpisodes> = ({ className }) => {
	const totalEpisodes = useAppSelector(
		(state) => state.selectedPodcast.totalEpisodes
	);
	return (
		<div className={className}>
			<b>Episodes: {totalEpisodes}</b>
		</div>
	);
};

export const STotalEpisodes = styled(TotalEpisodes)`
	box-shadow: ${({ $boxShadow }) => $boxShadow};
	padding: 0.5rem;
	margin-bottom: 1rem;
	font-size: 1.5rem;
`;
