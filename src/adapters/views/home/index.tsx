import { Helmet } from "react-helmet-async";
import Badge from "./components/badge";
import PodcastItem from "./components/podcast-list-item";
import useHomeController from "./hooks/use-home-controller";
import Spinner from "@/shared/components/spinner";

const HomePage = () => {
  const {
    podcasts,
    onChangeInput,
    title,
    description,
    searchPlaceholder,
    isLoading,
  } = useHomeController();
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 gap-6">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="/podcaster" />
      </Helmet>
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="text-lg text-gray-600">{description}</h2>
      <section className="self-end flex items-center gap-4 w-full max-w-xl p-4 bg-blue-100 rounded-lg shadow-md">
        <Badge value={podcasts?.length || 0} />
        <input
          className="border-black rounded-lg h-6 p-2 text-sm bg-white w-full"
          onInput={onChangeInput}
          placeholder={searchPlaceholder}
        />
      </section>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {podcasts &&
          podcasts.map((podcast, i) => (
            <PodcastItem key={i} podcast={podcast} />
          ))}
      </section>
    </div>
  );
};

export default HomePage;
