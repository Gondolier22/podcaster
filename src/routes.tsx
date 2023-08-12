import { Routes, Route } from 'react-router-dom';
import Landing from './views/landing/landing';
import { SPodcastDetail } from './views/podcast-detail/PodcastDetail';
import { SPodcastEpisode } from './views/podcast-episode/PodcastEpisode';

const RoutesApp = () => {
	return (
		<Routes>
			<Route path='/podcast/:podcastId' element={<SPodcastDetail />} />
			<Route
				path='/podcast/:podcastId/episode/:episodeId'
				element={<SPodcastEpisode />}
			/>
			<Route caseSensitive path='/' element={<Landing />} />
		</Routes>
	);
};
export default RoutesApp;
