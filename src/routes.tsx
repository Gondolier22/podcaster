import { Routes, Route } from 'react-router-dom';
import Landing from './views/landing/landing';

const RoutesApp = () => {
	return (
		<Routes>
			<Route path='/' Component={Landing} />
		</Routes>
	);
};
export default RoutesApp;
