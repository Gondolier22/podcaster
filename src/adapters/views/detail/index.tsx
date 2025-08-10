import { Helmet } from "react-helmet-async";
import AuthorDetail from "../shared/components/author-detail";
import EpisodeList from "./components/episode-list";
import usePodcastDetailController from "./hooks/use-podcast-detail-controller";

const PodcastDetailPage = () => {
  const { title, description, canonicalUrl } = usePodcastDetailController();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] gap-6 p-4 justify-content-start">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <AuthorDetail />
      <EpisodeList />
    </div>
  );
};

export default PodcastDetailPage;
