import React, { FC } from 'react';
import { SCHeader } from '../../components';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';

type TTPScreen = {
	children: React.ReactNode;
};

export const TPScreen: FC<TTPScreen> = ({ children }) => {
	const isLoading = useAppSelector(
		(state: RootState) => state.loader.isLoading
	);
	return (
		<>
			<SCHeader isLoading={isLoading} />
			<main>{children}</main>
		</>
	);
};
