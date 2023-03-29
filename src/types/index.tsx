import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface Item {
  active: boolean;
  brand: string;
  category: string;
  color: string;
  description: string;
  id: string;
  image: string;
  model: string;
  name: string;
  price: number;
  seller: string;
}

export interface Breadcrumb {
  label: string;
  href: string;
  icon?: IconDefinition;
}
