import usePodcasterStore from "@/store";
import { useParams } from "react-router-dom";

const useEpisodeDetailController = () => {
  const { id, episodeId } = useParams();
  const { selectedEpisode } = usePodcasterStore();

  const title = selectedEpisode?.title;
  const description = selectedEpisode?.description;

  const canonicalUrl = `/podcaster/podcast/${id}/episode/${episodeId}`;

  return { title, description, canonicalUrl };
};

export default useEpisodeDetailController;
