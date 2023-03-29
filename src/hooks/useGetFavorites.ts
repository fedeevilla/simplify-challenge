import { Item } from "@/types";
import useSWR from "swr";

import { fetcher } from "./utils";

const useGetFavorites = () => {
  const { data, isLoading, error } = useSWR<Item[]>("/api/favorites", fetcher);

  return { data: data ?? [], error, isLoading };
};

export default useGetFavorites;
