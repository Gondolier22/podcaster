import { FC } from 'react';
import { IPodcastItem } from '../../common/interfaces/podcast-item';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
interface ICPodcastInfo extends IPodcastItem {
	className?: string;
	$boxShadow: string;
}
export const CPodcastInfo: FC<ICPodcastInfo> = ({
	author,
	className,
	image,
	title,
	description,
	id,
}) => {
	const path = `/podcast/${id}`;
	return (
		<div className={className}>
			<div>
				<Link to={path}>
					<img src={image} alt='Podcast image' title={title} />
				</Link>
			</div>
			<hr />
			<div>
				<p>
					<Link to={path}>
						<b>{title}</b>
					</Link>
				</p>
				<p>
					<Link to={path}>
						<i>by {author}</i>
					</Link>
				</p>
			</div>
			<hr />
			<div>
				<p>
					<b>Description:</b>
				</p>
				<p>
					<i>{description}</i>
				</p>
			</div>
		</div>
	);
};

export const SCPodcastInfo = styled(CPodcastInfo)`
	width: 200px;
	box-shadow: ${({ $boxShadow }) => $boxShadow};
	padding: 1rem;
	text-align: center;
	word-break: break-all;
	text-overflow: ellipsis;
	& hr {
		color: lightgrey;
	}
	& p {
		text-align: left;
		margin: 0.5rem;
	}
`;
