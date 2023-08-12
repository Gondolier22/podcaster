import { setFilteredList } from '../../../../store/features/podcasts-list/podcastsListSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

export const useSearchPodcasts = () => {
	const podcasts = useAppSelector((state) => state.podcastsList.items);
	const dispatch = useAppDispatch();
	const run = (keyword: string) => {
		const filtered =
			keyword.length > 0
				? podcasts.filter(
						(p) =>
							p.title.toLowerCase().includes(keyword.toLowerCase()) ||
							p.author.toLowerCase().includes(keyword.toLowerCase())
				  )
				: podcasts;
		dispatch(setFilteredList(filtered));
	};

	return run;
};
