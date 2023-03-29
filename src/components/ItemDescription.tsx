interface ItemDescriptionProps {
  title: string;
  text: string;
  className?: string;
}

const ItemDescription = ({
  title,
  text,
  className = "w-1/2",
}: ItemDescriptionProps) => (
  <div className={`${className} mb-2`}>
    <h1 className="text-[#6B7280] font-light text-base">{title}</h1>
    <p className="mt-2 font-normal text-sm text-[#474747]">{text}</p>
  </div>
);

export default ItemDescription;
