import { NextResponse } from "next/server";

import { mockedData } from "../data";

export async function GET() {
  return NextResponse.json(mockedData);
}
