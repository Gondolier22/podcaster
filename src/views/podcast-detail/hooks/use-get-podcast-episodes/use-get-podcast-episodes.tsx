import { IPodcastEpisode } from '../../../../common/interfaces/podcast-episode';
import { useApiRequest } from '../../../../hooks/use-api-request/use-api-request';
import {
	defaultPodcast,
	setEpisodes,
	setPodcast,
	setTotalEpisodes,
} from '../../../../store/features/selected-podcast/selected-podcast';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

export const useGetPodcastEpisodes = () => {
	const dispatch = useAppDispatch();
	const runUseApiRequest = useApiRequest();
	const podcasts = useAppSelector((state) => state.podcastsList.items);
	const callback = (data: any) => {
		const aux = JSON.parse(data.contents);
		console.log(aux);

		dispatch(setTotalEpisodes(aux.resultCount));
		const episodes: IPodcastEpisode[] =
			aux.results?.map((r: any) => {
				return {
					id: r.trackId,
					title: r.trackName,
					date: r.releaseDate,
					duration: r.trackTimeMillis || 0,
					description: r.description || '',
					previewUrl: r.episodeUrl || '',
				};
			}) || [];
		dispatch(setEpisodes(episodes));
	};
	const run = (id: string) => {
		const podcast =
			podcasts.find((p) => p.id === parseInt(id || '')) || defaultPodcast;
		dispatch(setPodcast(podcast));
		runUseApiRequest({
			callback,
			method: 'get',
			path: `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
		});
	};

	return run;
};
