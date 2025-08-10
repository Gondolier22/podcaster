import type { Episode } from "../../domain/entities/episode";
import type { Podcast } from "../../domain/entities/podcast";
import type { PodcastRepository } from "../../domain/repositories/podcast-repository";
import axiosPodcaster from "../../libs/axios";
import mapToEpisodesList from "../adapters/map-to-episodes-list";
import mapToPodcastsList from "../adapters/map-to-podcasts-list";

class PodcastRepositoryImpl implements PodcastRepository {
  async getAllPodcasts(): Promise<Podcast[]> {
    const response = await axiosPodcaster.get(
      `?${encodeURIComponent(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
      )}`
    );

    return mapToPodcastsList(response.data.feed.entry || []);
  }

  async getPodcastEpisodes(podcastId: number): Promise<Episode[]> {
    return axiosPodcaster
      .get(
        `?${encodeURIComponent(
          `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
        )}`
      )
      .then((response) => mapToEpisodesList(response.data?.results || []));
  }
}

export default PodcastRepositoryImpl;
