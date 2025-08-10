import type { Episode } from "../entities/episode";
import type { Podcast } from "../entities/podcast";

export interface PodcastRepository {
  getAllPodcasts(): Promise<Podcast[]>;
  getPodcastEpisodes(podcastId: number): Promise<Episode[]>;
}
