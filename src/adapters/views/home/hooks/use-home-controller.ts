import { GetPodcastsList } from "@//application/use-cases/get-podcasts-list";
import type { Podcast } from "@//domain/entities/podcast";
import PodcastRepositoryImpl from "@//infraestructure/repositories/podcasts-repositories-impl";
import { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useSWR from "swr";

const useHomeController = () => {
  const { t } = useTranslation();
  const [podcastsState, setPodcastsState] = useState<Podcast[]>([]);

  const getPodcastsListFetcher = async () => {
    const useCase = new GetPodcastsList(new PodcastRepositoryImpl());
    return useCase.execute();
  };

  const { data, isLoading, error } = useSWR(
    "podcasts-list",
    getPodcastsListFetcher,
    {
      errorRetryCount: 0,
    }
  );

  useEffect(() => {
    if (data) {
      setPodcastsState(data);
    }
  }, [data]);

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.toLowerCase();

      if (!value) {
        setPodcastsState(data ?? []);
        return;
      }

      setPodcastsState(
        data?.filter(
          (podcast) =>
            podcast.title.toLowerCase().includes(value) ||
            podcast.author.toLowerCase().includes(value)
        ) ?? []
      );
    },
    [data]
  );

  return {
    podcasts: podcastsState,
    isLoading,
    error,
    onChangeInput,
    title: t("podcaster.home.title"),
    description: t("podcaster.home.description"),
    searchPlaceholder: t("podcaster.home.searchPlaceholder"),
  };
};

export default useHomeController;
