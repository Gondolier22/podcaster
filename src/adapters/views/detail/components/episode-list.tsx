import PodcastRepositoryImpl from "@//infraestructure/repositories/podcasts-repositories-impl";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import millisecondsToHoursString from "../utils/milliseconds-to-hours-string";
import usePodcasterStore from "@/store";
import Spinner from "@/shared/components/spinner";

const EpisodeList = () => {
  const { id } = useParams<{ id: string }>();
  const podcastRepository = new PodcastRepositoryImpl();
  const { data: episodes, isLoading } = useSWR(["podcastEpisodes", id], () =>
    podcastRepository.getPodcastEpisodes(Number(id))
  );

  const { setSelectedEpisode } = usePodcasterStore();
  if (isLoading) return <Spinner />;

  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-lg p-4 border-black border-[1px]">
      <table className="table-auto min-w-full  text-black ">
        <thead>
          <tr>
            <th className="text-left space-y-2 px-4 py-2 whitespace-nowrap">
              Title
            </th>
            <th className="text-left space-y-2 px-4 py-2 whitespace-nowrap">
              Released date
            </th>
            <th className="text-left space-y-2 px-4 py-2 whitespace-nowrap">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {episodes?.map((episode) => (
            <tr
              key={episode.id}
              className="hover:bg-gray-200 transition-colors"
            >
              <td className="space-y-2 px-4 py-2 whitespace-nowrap">
                <Link
                  to={`episode/${episode.id}`}
                  onClick={() => setSelectedEpisode(episode)}
                >
                  {episode.title}
                </Link>
              </td>
              <td className="space-y-2 px-4 py-2 whitespace-nowrap">
                {episode.date}
              </td>
              <td className="space-y-2 px-4 py-2 whitespace-nowrap">
                {millisecondsToHoursString(episode.duration)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EpisodeList;
