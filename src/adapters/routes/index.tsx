import Spinner from "@/shared/components/spinner";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Landing = lazy(() => import("@/adapters/views/home"));
const SPodcastDetail = lazy(() => import("@/adapters/views/detail"));
const SPodcastEpisode = lazy(() => import("@/adapters/views/episode-detail"));
const MainLayout = lazy(() => import("@/layouts/main-layout"));

const RoutesApp = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="podcast/:podcastId" element={<SPodcastDetail />} />
          <Route
            path="podcast/:podcastId/episode/:episodeId"
            element={<SPodcastEpisode />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default RoutesApp;
