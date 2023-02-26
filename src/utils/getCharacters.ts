import { ResponseAPI } from "../types";

export const getCharacters = async (page: number): Promise<ResponseAPI> =>
  fetch(`${import.meta.env.VITE_BASE_URL}/character/?page=${page}`).then(
    (res) => res.json()
  );
