import { Item } from "@/types";
import Image from "next/image";
import Link from "next/link";

import Badge from "./Badge";

interface Props {
  items: Item[];
}
const ItemList = ({ items }: Props) => (
  <table className="w-full text-sm text-left text-gray-500">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th className="px-6 py-3" scope="col">
          Name
        </th>
        <th className="px-6 py-3" scope="col">
          Seller
        </th>
        <th className="px-6 py-3" scope="col">
          Status
        </th>
        <th className="px-6 py-3" scope="col">
          Price
        </th>
        <th className="px-6 py-3" scope="col" />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, image, seller, active, price }) => {
        return (
          <tr key={id} className="bg-white border-b hover:bg-gray-50">
            <th
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              scope="row"
            >
              <div className="flex gap-2">
                <Image
                  alt={name}
                  className="w-10 h-10 rounded-full"
                  height={30}
                  src={image}
                  width={30}
                />
                <Link
                  className="flex items-center ml-4 font-normal"
                  href={`/dashboard/item/${id}`}
                >
                  {name}
                </Link>
              </div>
            </th>
            <td className="px-6 py-4 font-extrabold">{seller}</td>
            <td className="px-6 py-4">
              <Badge
                label={active ? "Active" : "Disabled"}
                type={active ? "success" : "error"}
              />
            </td>
            <td className="px-6 py-4 font-extrabold">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td className="px-6 py-4">
              <button className="font-medium text-red-500">Remove</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default ItemList;
