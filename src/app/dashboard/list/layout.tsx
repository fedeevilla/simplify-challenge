import { ReactNode } from "react";

import NavBar from "@/components/Navigator/NavBar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return <NavBar>{children}</NavBar>;
}
