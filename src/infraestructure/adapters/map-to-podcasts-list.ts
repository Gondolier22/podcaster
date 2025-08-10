import type { Podcast } from "../../domain/entities/podcast";

function mapToPodcastsList(podcasts: any[]): Podcast[] {
  return podcasts.map((podcast) => ({
    id: podcast.id.attributes["im:id"] ?? 0,
    image: podcast["im:image"][2].label ?? "",
    title: podcast["im:name"].label ?? "No title",
    author: podcast["im:artist"].label ?? "Unknown Author",
    description: podcast.summary?.label ?? "No description available",
  }));
}

export default mapToPodcastsList;
