import { FC } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { SAvatar } from '../avatar/Avatar';
import { IPodcastItem } from '../../common/interfaces/podcast-item';

interface ICPodcastItem extends IPodcastItem {
	className?: string;
	$boxShadow: string;
}

export const CPodcastItem: FC<ICPodcastItem> = ({
	author,
	className,
	id,
	image,
	title,
}) => {
	return (
		<Link className={className} to={`/podcast/${id}`}>
			<fieldset>
				<legend>
					<SAvatar src={image} title={title} alt={`Image of ${title}`} />
				</legend>
				<h2>{title}</h2>
				<span>Author: {author}</span>
			</fieldset>
		</Link>
	);
};

export const SCPodcastItem = styled(CPodcastItem)`
	text-decoration: unset;
	color: black;
	& > fieldset {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: transparent;
		width: 200px;
		margin: 3rem;
		box-shadow: ${({ $boxShadow }) => $boxShadow};
		border: none;
		& > legend {
			text-align: center;
		}

		& > h2,
		& > span {
			text-align: center;
		}
		& > h2 {
			font-size: 0.9rem;
		}
		& > span {
			font-size: 0.7rem;
			color: grey;
		}
	}
`;
