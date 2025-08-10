import { Helmet } from "react-helmet-async";
import AuthorDetail from "../shared/components/author-detail";
import Detail from "./components/detail";
import useEpisodeDetailController from "./hooks/use-episode-detial-controller";

const EpisodeDetail = () => {
  const { title, description, canonicalUrl } = useEpisodeDetailController();
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-[25%_75%] gap-4">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <AuthorDetail />
      <Detail />
    </section>
  );
};

export default EpisodeDetail;
