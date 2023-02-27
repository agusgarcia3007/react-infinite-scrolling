import { Dot } from "../components";

export const getStatus = (status: string) => {
  if (status === "alive") return <Dot color="bg-green-500" />;
  if (status === "dead") return <Dot color="bg-red-500" />;
  return <Dot color="bg-gray-500">?</Dot>;
};
