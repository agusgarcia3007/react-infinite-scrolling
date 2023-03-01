import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { ResponseAPI } from "../types";

const fetcher = (endpoint: string) =>
  fetch(`${import.meta.env.VITE_BASE_URL}/${endpoint}`).then((res) =>
    res.json()
  );

export const useGetInfo = () => {
  const lcoationsQuery = useQuery(["locations"], () => fetcher("location"));

  const episodesFetcher = ({ pageParam }: { pageParam: number }) =>
    fetch(`${import.meta.env.VITE_BASE_URL}/episode?page=${pageParam}`).then(
      (res) => res.json()
    );

  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["episodes"],
    ({ pageParam = 1 }) => episodesFetcher({ pageParam }),
    {
      getNextPageParam: (lastPage: ResponseAPI) => {
        const previousPage = lastPage.info.prev
          ? +lastPage.info.prev.split("=")[1]
          : 0;
        const currentPage = previousPage + 1;

        if (currentPage === lastPage.info.pages) return false;
        return currentPage + 1;
      },
    }
  );

  const episodes = useMemo(
    () =>
      data?.pages.reduce((prev, page) => {
        return {
          info: page.info,
          results: [...prev.results, ...page.results],
        };
      }),
    [data]
  );

  const locations = lcoationsQuery.data;

  return {
    locations,
    episodes,
    status,
    hasNextPage,
    error,
    fetchNextPage,
  };
};
