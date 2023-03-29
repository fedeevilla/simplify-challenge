"use client";

import ItemList from "@/components/ItemList";
import Spinner from "@/components/Spinner";
import useGetFavorites from "@/hooks/useGetFavorites";

const Dashboard = () => {
  const { data: items, isLoading } = useGetFavorites();

  return (
    <>
      <div className="flex justify-between p-4">
        <div>
          <h1 className="mb-2 text-xl font-medium">Favorites</h1>
          <p className="text-sm font-medium text-[#626060]">
            A list of your favorites items to keep track of.
          </p>
        </div>
        <div className="flex items-center">
          <button className="bg-[#4F46E5] rounded-md text-white px-3 py-2 text-sm">
            + Add
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      ) : (
        <div className="p-4 mt-8 overflow-scroll">
          <ItemList items={items} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
