import { useQuery } from "@tanstack/react-query";

const fetcher = (endpoint: string) =>
  fetch(`${import.meta.env.VITE_BASE_URL}/${endpoint}`).then((res) =>
    res.json()
  );

export const useGetInfo = () => {
  const lcoationsQuery = useQuery(["locations"], () => fetcher("location"));

  const episodesQuery = useQuery(["episodes"], () => fetcher("episode"));

  const locations = lcoationsQuery.data;
  const episodes = episodesQuery.data;

  return {
    locations,
    episodes,
  };
};
