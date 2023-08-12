import { FC, useEffect } from 'react';
import { SCBadge } from '../../../components/badge/Badge';
import { SInput } from '../../../components/input/Input';
import { styled } from 'styled-components';
import { useAskForPopularPodcasts } from '../hooks/ask-for-popular-podcasts/ask-for-popular-podcasts';
import { useSearchPodcasts } from '../hooks/use-search-podcasts/use-search-podcasts';
import { useAppSelector } from '../../../store/hooks';

type TSearch = {
	className?: string;
};

export const Search: FC<TSearch> = ({ className }) => {
	const runAskForPopularPodcasts = useAskForPopularPodcasts();
	const runUseSearchPodcasts = useSearchPodcasts();
	const podcastsLength = useAppSelector(
		(state) => state.podcastsList.items.length
	);
	useEffect(() => {
		runAskForPopularPodcasts();
	}, []);
	const inputChangeHandler = (e: any) => {
		runUseSearchPodcasts(e.target.value);
	};
	return (
		<div className={className}>
			<SCBadge value={podcastsLength} />
			<SInput placeholder='Filter podcasts...' onInput={inputChangeHandler} />
		</div>
	);
};

export const SSearch = styled(Search)`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: 1rem 0;
`;
