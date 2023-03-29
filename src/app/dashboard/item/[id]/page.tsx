import { metadata } from "@/app/layout";
import Alert from "@/components/Alert";
import Badge from "@/components/Badge";
import ItemDescription from "@/components/ItemDescription";
import { Item } from "@/types";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

async function getItemDetails(id: string): Promise<Item> {
  const response = await fetch(`${process.env.BASE_URL}/api/item/${id}`);
  const data = await response.json();

  return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await fetch(`${process.env.BASE_URL}/api/item/${params.id}`);
  const data = await response.json();

  if (data.id) {
    const { name, brand, description, image } = data;
    const metaTitle = `${name} | ${brand}`;
    return {
      title: metaTitle,
      description,
      openGraph: {
        title: metaTitle,
        description,
        url: `${process.env.BASE_URL}/dashboard/item/${params?.id}`,
        siteName: metadata.title,
        images: [
          {
            url: image,
            width: 800,
            height: 600,
          },
          {
            url: image,
            width: 1800,
            height: 1600,
          },
        ],
        locale: "en-US",
        type: "website",
      },
    };
  } else {
    return {
      title: "Item not found",
      description: "Item not found",
    };
  }
}

export default async function ItemPage({ params }: Props) {
  const {
    name,
    image,
    brand,
    model,
    category,
    description,
    color,
    price,
    active,
    id,
  } = await getItemDetails(params.id);

  if (!id)
    return (
      <div className="flex items-center justify-center">
        <Alert description="Item not found!" title="Error:" />
      </div>
    );

  return (
    <div className="w-full m-4 my-6">
      <div className="flex items-center gap-6">
        <Image
          alt={name}
          className="w-24 h-24 rounded-full"
          height={80}
          src={image}
          width={80}
        />
        <div>
          <h1 className="text-base font-semibold">{name}</h1>
          <p className="text-sm font-normal text-[#707784]">{brand}</p>
        </div>
      </div>
      <div className="flex w-3/4 gap-8 mt-8">
        <div className="w-2/3 bg-white rounded-lg shadow-lg">
          <div className="p-6 border-b border-b-gray-200">
            <h1 className="mb-1 text-lg font-semibold">Product Information</h1>
            <p className="text-sm font-normal text-[#707784]">
              Item and seller details
            </p>
          </div>
          <div className="w-full p-6">
            <div className="flex mb-4">
              <ItemDescription text={brand} title="Brand" />
              <ItemDescription text={model} title="Model Name" />
            </div>
            <div className="flex mb-4">
              <ItemDescription text={color} title="Color" />
              <ItemDescription text={category} title="Category" />
            </div>
            <ItemDescription
              className="w-full"
              text={description}
              title="About"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between w-1/3 p-4 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col gap-2 p-4">
            <p className="text-lg font-extrabold">Buy new!</p>
            <p className="text-2xl font-bold">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <p className="font-bold text-[#306F83]">Free Returns</p>
            <p className="font-extralight">
              Free Delivery
              <span className="font-extrabold"> Today 2PM - 6 PM</span>
            </p>
            <p className="flex gap-2 font-bold text-blue-600">
              <FontAwesomeIcon
                className="w-3 text-[#707784]"
                icon={faLocationDot}
              />
              Deliver to Federico Villa
            </p>
            <div className="flex flex-col gap-2 my-6">
              <div>
                <Badge
                  label={active ? "In Stock" : "Out of Stock"}
                  type={active ? "success" : "error"}
                />
              </div>
              <div>
                <select
                  className="px-1 text-sm bg-gray-200 rounded-lg w-min"
                  defaultValue="1"
                  disabled={!active}
                >
                  <option value="1">Qty: 1</option>
                  <option value="2">Qty: 2</option>
                  <option value="3">Qty: 3</option>
                  <option value="4">Qty: 4</option>
                  <option value="5">Qty: 5</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <button className=" text-white bg-[#47454E] hover:bg-[#47454E]/90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-normal rounded-lg text-base px-5 py-2.5 mr-2 mb-2">
              Add to cart
            </button>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
