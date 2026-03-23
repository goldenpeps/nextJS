import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  console.log("req: ", req);
  return NextResponse.json({ test: "test" });
}
