import usePodcasterStore from "@/store";
import { useParams } from "react-router-dom";

const usePodcastDetailController = () => {
  const { id } = useParams();
  const { selectedPodcast } = usePodcasterStore();

  const title = selectedPodcast?.title;
  const description = selectedPodcast?.description;
  const canonicalUrl = `/podcaster/podcast/${id}`;

  return { title, description, canonicalUrl };
};

export default usePodcastDetailController;
