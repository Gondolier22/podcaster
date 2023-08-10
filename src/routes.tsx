import { Routes, Route } from 'react-router-dom';
import Landing from './views/landing/landing';

const RoutesApp = () => {
	console.log('render');

	return (
		<Routes>
			<Route caseSensitive path='/' element={<Landing />} />
		</Routes>
	);
};
export default RoutesApp;
