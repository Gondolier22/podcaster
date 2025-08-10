import usePodcasterStore from "@/store";
import { Link } from "react-router-dom";

const AuthorDetail = () => {
  const { selectedPodcast } = usePodcasterStore();

  if (!selectedPodcast) {
    return null;
  }

  const { title, author, image, description } = selectedPodcast;

  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-2xl font-bold">
        <Link to={`/podcaster/podcast/${selectedPodcast.id}`}>{title}</Link>
      </h1>
      <img src={image} alt={title} className="w-32 h-32 rounded-full m-2" />
      <p className="text-lg text-gray-600 mt-2">By {author}</p>
      <p className="text-sm text-gray-500 mt-2 text-center">{description}</p>
    </div>
  );
};

export default AuthorDetail;
