import {
	setFilteredList,
	setList,
} from '../../../../store/features/podcasts-list/podcastsListSlice';
import { useAppDispatch } from '../../../../store/hooks';
import { useApiRequest } from '../../../../hooks/use-api-request/use-api-request';
import { IPodcastItem } from '../../../../common/interfaces/podcast-item';

export const useAskForPopularPodcasts = () => {
	const runUseApiRequest = useApiRequest();
	const dispatch = useAppDispatch();
	const callback = (data: any) => {
		const aux = JSON.parse(data.contents);
		const items: IPodcastItem[] = aux.feed.entry?.map((p: any) => {
			return {
				id: parseInt(p.id.attributes['im:id']),
				image: p['im:image'][p['im:image'].length - 1].label,
				author: p['im:artist'].label,
				title: p.title.label.split('-')[0]?.trim(),
				description: p.summary?.label,
			};
		});
		dispatch(setList(items));
		dispatch(setFilteredList(items));
	};
	const run = () => {
		runUseApiRequest({
			method: 'get',
			path: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
			callback,
		});
	};

	return run;
};
