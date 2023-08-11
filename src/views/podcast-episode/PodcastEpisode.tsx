import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import { SCPodcastInfo } from '../../components/podcast-info/PodcastInfo';
import { styled } from 'styled-components';
import { BOX_SHADOW } from '../../styles/general';
import { TPScreen } from '../../templates/Screen/Screen';
import { SDetails } from './details/Details';

interface IPodcastEpisode {
	className?: string;
}

export const PodcastEpisode: FC<IPodcastEpisode> = ({ className }) => {
	const selectedPodcast = useAppSelector((state) => state.selectedPodcast);
	return (
		<TPScreen>
			<section className={className}>
				<div>
					<SCPodcastInfo {...selectedPodcast.item} $boxShadow={BOX_SHADOW} />
				</div>
				<div>
					<SDetails $boxShadow={BOX_SHADOW} />
				</div>
			</section>
		</TPScreen>
	);
};

export const SPodcastEpisode = styled(PodcastEpisode)`
	display: grid;
	grid-template-columns: 200px auto;
	grid-gap: 100px;
	grid-auto-rows: minmax(200px, auto);
	padding: 2rem;
	& > div:first-child {
		grid-column: 1;
		grid-row: 1;
	}
	& > div:last-child {
		grid-column: 2;
		grid-row: 1;
	}
`;
