import axios from 'axios';
import { useAppDispatch } from '../../store/hooks';
import {
	endLoading,
	startLoading,
} from '../../store/features/loader/loaderSlice';

type TUseApiRequest = {
	path: string;
	method: string;
	body?: any;
	callback: (data: any) => void;
};
export const useApiRequest = () => {
	const dispatch = useAppDispatch();
	const run = async ({ callback, path, body, method }: TUseApiRequest) => {
		try {
			dispatch(startLoading());
			const response = await axios({
				method,
				data: body,
				url: `https://api.allorigins.win/get?url=${path}`,
			});
			callback(response.data);
		} catch (e) {
			console.error(e);
		} finally {
			dispatch(endLoading());
		}
	};

	return run;
};
