import { TPScreen } from '../../templates/Screen/Screen';
import { SSearch } from './search/Search';
import { SPodcastsContainer } from './podcasts-container/podcasts-container';
import { useAppDispatch } from '../../store/hooks';
import { useEffect } from 'react';
import { clearPodcast } from '../../store/features/selected-podcast/selected-podcast';

const Landing = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(clearPodcast());
	}, []);
	return (
		<TPScreen>
			<SSearch />
			<SPodcastsContainer />
		</TPScreen>
	);
};

export default Landing;
