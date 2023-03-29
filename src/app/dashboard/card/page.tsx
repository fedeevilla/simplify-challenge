"use client";

import Card from "@/components/Card";
import Spinner from "@/components/Spinner";
import useGetFavorites from "@/hooks/useGetFavorites";

export default function CardList() {
  const { data: items, isLoading } = useGetFavorites();

  return (
    <>
      <h1 className="pt-4 ml-4 text-3xl font-semibold text-black">Dashboard</h1>
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-flow-row gap-16 p-16 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}
