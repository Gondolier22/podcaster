import { FC } from 'react';
import { styled } from 'styled-components';
type TCBadge = {
	value: number;
	className?: string;
};
export const CBadge: FC<TCBadge> = ({ value, className }) => {
	return <span className={className}>{value}</span>;
};
export const SCBadge = styled(CBadge)`
	background-color: blue;
	border-radius: 10px;
	font-size: 0.9rem;
	text-align: center;
	padding: 0.2rem;
	color: white;
	margin: 0.5rem;
`;
