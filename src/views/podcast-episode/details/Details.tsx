import { styled } from 'styled-components';
import { useAppSelector } from '../../../store/hooks';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

interface IDetails {
	className?: string;
	$boxShadow: string;
}

export const Details: FC<IDetails> = ({ className }) => {
	const { episodeId } = useParams();
	const selectedPodcast = useAppSelector((state) => state.selectedPodcast);
	const selectedEpisode =
		selectedPodcast.episodes.find((e) => e.id === parseInt(episodeId || '')) ||
		undefined;
	return (
		<section className={className}>
			{selectedEpisode ? (
				<>
					<h1>{selectedEpisode.title}</h1>
					<p>
						<i>{selectedEpisode.description}</i>
					</p>
					<audio controls preload='auto'>
						<source src={selectedEpisode.previewUrl} type='audio/mp3' />
					</audio>
				</>
			) : (
				<p>No hay datos del episodio</p>
			)}
		</section>
	);
};

export const SDetails = styled(Details)`
	box-shadow: ${({ $boxShadow }) => $boxShadow};
	padding: 0.5rem;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	& h1 {
		font-size: 1.2rem;
	}
	& p {
		font-size: 0.9rem;
	}
`;
