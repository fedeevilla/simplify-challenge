interface Props {
  type: "error" | "success" | "warning" | "info";
  label: string;
}

const Badge = ({ type, label }: Props) => {
  let className = "";

  switch (type) {
    case "error":
      className = "text-red-800 bg-red-100";
      break;
    case "success":
      className = "text-green-800 bg-green-100";
      break;
    case "warning":
      className = "text-yellow-800 bg-yellow-100";
      break;
    case "info":
      className = "text-blue-800 bg-blue-100";
      break;
    default:
      break;
  }

  return (
    <span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${className}`}
    >
      {label}
    </span>
  );
};

export default Badge;
