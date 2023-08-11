import { useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { useGetPodcastEpisodes } from './hooks/use-get-podcast-episodes/use-get-podcast-episodes';
import { SCPodcastInfo } from '../../components/podcast-info/PodcastInfo';
import { STotalEpisodes } from './total-episodes/TotalEpisodes';
import { STableEpisodes } from './table-episodes/TableEpisodes';
import { styled } from 'styled-components';
import { BOX_SHADOW } from '../../styles/general';
import { TPScreen } from '../../templates/Screen/Screen';

interface IPodcastDetail {
	className?: string;
}

export const PodcastDetail: FC<IPodcastDetail> = ({ className }) => {
	const { podcastId } = useParams();
	const selectedPodcast = useAppSelector((state) => state.selectedPodcast);
	const runUseGetPodcastEpisodes = useGetPodcastEpisodes();
	useEffect(() => {
		runUseGetPodcastEpisodes(podcastId || '');
	}, [podcastId]);
	return (
		<TPScreen>
			<section className={className}>
				<div>
					<SCPodcastInfo {...selectedPodcast.item} $boxShadow={BOX_SHADOW} />
				</div>
				<div>
					<STotalEpisodes $boxShadow={BOX_SHADOW} />
					<STableEpisodes $boxShadow={BOX_SHADOW} />
				</div>
			</section>
		</TPScreen>
	);
};

export const SPodcastDetail = styled(PodcastDetail)`
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
