import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import usePodcasterStore from "@/store";

const Breadcrumbs = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { selectedPodcast, selectedEpisode } = usePodcasterStore();

  const pathSegments = location.pathname.split("/").filter(Boolean);

  if (pathSegments.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="m-4">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            {t("breadcrumbs.home", "Inicio")}
          </Link>
        </li>
        {pathSegments.includes("podcast") && selectedPodcast && (
          <>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                to={`/podcast/${pathSegments[1]}`}
                className="text-blue-600 hover:underline"
              >
                {selectedPodcast.title}
              </Link>
            </li>
          </>
        )}
        {pathSegments.includes("episode") && selectedEpisode && (
          <>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-gray-500">
              {selectedEpisode.title}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
