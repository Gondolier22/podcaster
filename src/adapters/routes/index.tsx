import ErrorComponent from "@/shared/components/error-component";
import Spinner from "@/shared/components/spinner";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../views/home"));
const PodscastDetailPage = lazy(() => import("../views/detail"));
const EpisodeDetail = lazy(() => import("../views/episode-detail"));

const PodcasterRouter = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="podcast/:id" element={<PodscastDetailPage />} />
          <Route
            path="podcast/:id/episode/:episodeId"
            element={<EpisodeDetail />}
          />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default PodcasterRouter;
