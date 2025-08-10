import usePodcasterStore from "@/store";

const Detail = () => {
  const { selectedEpisode } = usePodcasterStore();
  return (
    <article className="w-full">
      <h2 className="text-2xl font-bold mb-4">{selectedEpisode?.title}</h2>
      <i className="text-gray-700">
        {selectedEpisode?.description ?? "No description provided"}
      </i>
      {selectedEpisode?.previewUrl ? (
        <audio
          className="mt-4"
          controls
          src={selectedEpisode.previewUrl}
          crossOrigin="anonymous"
          preload="metadata"
        />
      ) : (
        <div className="mt-4 text-red-500">No audio available</div>
      )}
    </article>
  );
};

export default Detail;
