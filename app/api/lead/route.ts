import { NextResponse } from "next/server";
import { addLeadToSheet } from "@/lib/googleSheets";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await addLeadToSheet(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}