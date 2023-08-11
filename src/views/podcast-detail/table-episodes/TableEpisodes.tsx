import { styled } from 'styled-components';
import { useAppSelector } from '../../../store/hooks';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { dateParser } from '../../../common/functions/date-parser/date-parser';
import { millisecondsToMinutes } from '../../../common/functions/milliseconds-to-minutes/milliseconds-to-minutes';

interface ITableEpisodes {
	className?: string;
	$boxShadow: string;
}

export const TableEpisodes: FC<ITableEpisodes> = ({ className }) => {
	const selectedPodcastId = useAppSelector(
		(state) => state.selectedPodcast.item.id
	);
	const episodes = useAppSelector((state) => state.selectedPodcast.episodes);

	const episodesHTML = episodes.map((e) => {
		return (
			<tr key={e.id}>
				<td>
					<Link to={`/podcast/${selectedPodcastId}/episode/${e.id}`}>
						{e.title}
					</Link>
				</td>
				<td>{dateParser(e.date)}</td>
				<td>{millisecondsToMinutes(e.duration)}</td>
			</tr>
		);
	});
	return (
		<table cellSpacing={0} className={className}>
			<thead>
				<tr>
					<th>Title</th>
					<th>Date</th>
					<th>Duration</th>
				</tr>
			</thead>
			<tbody>{episodesHTML}</tbody>
		</table>
	);
};

export const STableEpisodes = styled(TableEpisodes)`
	width: 100%;
	box-shadow: ${({ $boxShadow }) => $boxShadow};
	padding: 1rem;
	overflow: auto;

	& th {
		text-align: left;
	}

	& td,
	th {
		padding: 0.5rem;
	}

	& tbody tr:nth-child(odd) {
		background-color: #e6e6e6;
		color: black;

		& td {
			border-top: 2px solid grey;
			border-bottom: 2px solid grey;
		}
	}
`;
