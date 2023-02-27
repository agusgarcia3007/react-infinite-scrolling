import { ReactNode } from "react";

const Dot = ({ color, children }: { color: string; children?: ReactNode }) => (
  <span
    className={`w-3 h-3 text-xs p-1 hover:animate-pulse flex justify-center items-center rounded-full ${color}`}
  >
    {children}
  </span>
);

export default Dot;
