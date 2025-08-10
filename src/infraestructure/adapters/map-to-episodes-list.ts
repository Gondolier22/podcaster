import type { Episode } from "../../domain/entities/episode";

const mapToEpisodesList = (episodes: any[]): Episode[] => {
  return episodes.map((episode) => ({
    id: episode.trackId,
    title: episode.trackName,
    description: episode.description,
    date: new Date(episode.releaseDate).toLocaleDateString(),
    duration: episode.trackTimeMillis ?? 0,
    previewUrl: episode.episodeUrl ?? "",
  }));
};

export default mapToEpisodesList;
