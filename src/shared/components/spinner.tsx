const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg
        className="animate-spin h-16 w-16 text-gradient"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient
            id="spinner-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#f59e42" />
          </linearGradient>
        </defs>
        <circle
          className="opacity-20"
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="url(#spinner-gradient)"
          strokeWidth="4"
        />
        <path
          className="opacity-90"
          fill="url(#spinner-gradient)"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.364A8 8 0 0112 20v4c-6.627 0-12-5.373-12-12h4a8 8 0 006.364 2.93zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2.93-6.364A8 8 0 0112 4V0c6.627 0 12 5.373 12 12h-4a8 8 0 00-6.364-2.93z"
        />
      </svg>
    </div>
  );
};

export default Spinner;
