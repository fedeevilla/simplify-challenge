import { Breadcrumb } from "@/types";
import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";

export const breadcrumbs: Breadcrumb[] = [
  {
    label: "Dashboard",
    href: "/dashboard/list",
    icon: faHouse,
  },
  { label: "Browser", href: "/dashboard/list", icon: faFolderClosed },
  { label: "Cart", href: "/dashboard/card", icon: faCartShopping },
];
