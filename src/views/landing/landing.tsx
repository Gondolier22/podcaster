import { TPScreen } from '../../templates/Screen/Screen';
import { SSearch } from './search/Search';
import { SPodcastsContainer } from './podcasts-container/podcasts-container';

const Landing = () => {
	return (
		<TPScreen>
			<SSearch />
			<SPodcastsContainer />
		</TPScreen>
	);
};

export default Landing;
