import type { FC } from "react";

type BadgeProps = {
  value: number;
};
const Badge: FC<BadgeProps> = ({ value }) => (
  <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full">
    <span className="text-xs">{value}</span>
  </div>
);

export default Badge;
