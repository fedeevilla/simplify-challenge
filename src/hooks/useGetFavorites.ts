import { Item } from "@/types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const useGetFavorites = () => {
  const { data, isLoading, error } = useSWR<Item[]>("/api/favorites", fetcher);

  return { data: data ?? [], error, isLoading };
};

export default useGetFavorites;
