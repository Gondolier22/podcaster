import type { Podcast } from "@//domain/entities/podcast";
import usePodcasterStore from "@/store";
import { useId, type CSSProperties, type FC } from "react";
import { Link } from "react-router-dom";

type PodcastItemProps = {
  podcast: Podcast;
  style?: CSSProperties;
};

const PodcastItem: FC<PodcastItemProps> = ({ podcast, style }) => {
  const articleId = useId();
  const { id, title, author, image } = podcast;
  const { setSelectedPodcast } = usePodcasterStore();
  return (
    <article
      style={style}
      key={articleId}
      className="w-56 md:w-64 lg:w-72 xl:w-80 "
    >
      <Link
        to={`podcast/${id}`}
        className="text-black no-underline"
        onClick={() => setSelectedPodcast(podcast)}
      >
        <fieldset className="flex items-center justify-center flex-col bg-blue-100   shadow-xl border-none rounded-lg w-full p-2">
          <legend className="text-center">
            <img
              className="h-[100px] rounded-[100px]"
              src={image}
              title={title}
              alt={`Image of ${title}`}
            />
          </legend>
          <h3 className="text-center text-sm">{title}</h3>
          <span className="text-center text-xs text-gray-500">
            Author: {author}
          </span>
        </fieldset>
      </Link>
    </article>
  );
};

export default PodcastItem;
