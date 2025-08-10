import type { Episode } from "../domain/entities/episode";
import type { Podcast } from "../domain/entities/podcast";
import { create } from "zustand";

type PodcasterStore = {
  selectedPodcast: Podcast | null;
  selectedEpisode: Episode | null;
  setSelectedPodcast: (podcast: Podcast | null) => void;
  setSelectedEpisode: (episode: Episode | null) => void;
};

const usePodcasterStore = create<PodcasterStore>((set) => ({
  selectedPodcast: null,
  setSelectedPodcast: (podcast) => set({ selectedPodcast: podcast }),
  selectedEpisode: null,
  setSelectedEpisode: (episode) => set({ selectedEpisode: episode }),
}));

export default usePodcasterStore;
