import { Routes, Route } from 'react-router-dom';
import Landing from './views/landing/landing';
import { SPodcastDetail } from './views/podcast-detail/PodcastDetail';

const RoutesApp = () => {
	return (
		<Routes>
			<Route path='/podcast/:podcastId' element={<SPodcastDetail />} />
			<Route caseSensitive path='/' element={<Landing />} />
		</Routes>
	);
};
export default RoutesApp;
