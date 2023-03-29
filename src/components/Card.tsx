import { Item } from "@/types";
import Image from "next/image";
import Link from "next/link";

import Badge from "./Badge";

interface Props {
  item: Item;
}

const Card = ({ item }: Props) => {
  const { id, name, image, price, active } = item;

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <Image
          alt={name}
          className="w-12 h-12 rounded-full"
          height={90}
          src={image}
          width={90}
        />
        <div className="pt-5">
          <h2 className="text-base font-semibold text-center text-gray-900">
            {name}
          </h2>
          <p className="my-3 font-normal text-center text-[#4E4E4E] text-sm">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <div className="flex justify-center">
            <Badge
              label={active ? "Active" : "Disabled"}
              type={active ? "success" : "error"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-around w-full p-4 mt-4 border-t border-t-[#F3F4F6]">
        <button className="text-base font-normal text-red-500">Remove</button>
        <Link className="text-base font-normal text-black" href={`/item/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
};

export default Card;
