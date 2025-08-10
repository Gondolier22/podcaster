import type { FC } from "react";
import {} from "react-error-boundary";

const ErrorComponent: FC<any> = ({ error, resetBoundary }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <h2 className="font-bold text-lg mb-1">
        {error?.message || "Something went wrong"}
      </h2>
      <button
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
        onClick={() => resetBoundary()}
        aria-label="Close error"
      >
        <svg
          className="fill-current h-6 w-6 text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 9l-5-5-1.41  1.41L8.59 10l-5 5L5 16l5-5 5 5 1.41-1.41-5-5 5-5L15 4l-5 5z" />
        </svg>
      </button>
    </div>
  );
};

export default ErrorComponent;
