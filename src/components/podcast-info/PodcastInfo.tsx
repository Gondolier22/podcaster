import { FC } from 'react';
import { IPodcastItem } from '../../common/interfaces/podcast-item';
import { styled } from 'styled-components';
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
}) => {
	return (
		<div className={className}>
			<div>
				<img src={image} alt='Podcast image' title={title} />
			</div>
			<hr />
			<div>
				<p>
					<b>{title}</b>
				</p>
				<p>
					<i>by {author}</i>
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
