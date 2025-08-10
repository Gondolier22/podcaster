import type { PodcastRepository } from "../../domain/repositories/podcast-repository";
import type { Podcast } from "../../domain/entities/podcast";

export class GetPodcastsList {
  private podcastRepository: PodcastRepository;

  constructor(podcastRepository: PodcastRepository) {
    this.podcastRepository = podcastRepository;
  }

  async execute(): Promise<Podcast[]> {
    return this.podcastRepository.getAllPodcasts();
  }
}
