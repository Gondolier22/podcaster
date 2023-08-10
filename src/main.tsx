import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
			<RoutesApp />
		</BrowserRouter>
	</Provider>
);
