import {
	IPodcastItem,
	setFilteredList,
	setList,
} from '../../../../store/features/podcastsList/podcastsListSlice';
import { useAppDispatch } from '../../../../store/hooks';
import { useApiRequest } from '../../../../hooks/use-api-request/use-api-request';

export const useAskForPopularPodcasts = () => {
	const runUseApiRequest = useApiRequest();
	const dispatch = useAppDispatch();
	const callback = (data: any) => {
		const items: IPodcastItem[] = data.feed.entry?.map((p: any) => {
			return {
				id: p.id.attributes['im:id'],
				image: p['im:image'][p['im:image'].length - 1].label,
				author: p['im:artist'].label,
				title: p.title.label.split('-')[0]?.trim(),
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
