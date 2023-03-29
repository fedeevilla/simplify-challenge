import { NextResponse } from "next/server";
import { mockedData } from "../../data";

interface Props {
  params: {
    id: string;
  };
}
export async function GET(_: NextResponse, { params }: Props) {
  const item = mockedData.find(({ id }) => id === params.id);
  return NextResponse.json(item ?? {});
}
