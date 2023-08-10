import { styled } from 'styled-components';
import { SCPodcastItem } from '../../../components/podcast-item/PodcastItem';
import { useAppSelector } from '../../../store/hooks';
import { FC } from 'react';

interface IPodcastContainer {
	className?: string;
}

export const PodcastsContainer: FC<IPodcastContainer> = ({ className }) => {
	const podcasts = useAppSelector((state) => state.podcastsList.filteredItems);
	const podcastsHTML = podcasts.map((p) => <SCPodcastItem {...p} />);
	return <section className={className}>{podcastsHTML}</section>;
};

export const SPodcastsContainer = styled(PodcastsContainer)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
