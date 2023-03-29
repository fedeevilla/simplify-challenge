import { ReactNode } from "react";

import SideBar from "@/components/Navigator/SideBar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return <SideBar>{children}</SideBar>;
}
