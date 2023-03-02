export const fetcher = (pageParam: number, endpoint: string) =>
  fetch(`${import.meta.env.VITE_BASE_URL}/${endpoint}?page=${pageParam}`).then(
    (res) => res.json()
  );
