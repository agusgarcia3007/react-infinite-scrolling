import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { ResponseAPI } from "../types";
import { fetcher } from "../utils/fetcher";

export const useGetLocations = () => {
  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["locations"],
    ({ pageParam }) => fetcher(pageParam, "location"),
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

  const locations = useMemo(
    () =>
      data?.pages.reduce((prev, page) => {
        return {
          info: page.info,
          results: [...prev.results, ...page.results],
        };
      }),
    [data]
  );
  return { locations, error, fetchNextPage, status, hasNextPage };
};
