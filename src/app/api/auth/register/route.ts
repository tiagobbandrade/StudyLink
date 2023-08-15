import { initializeFirebase } from "@/services/admin-firebase";
import { NextRequest, NextResponse } from "next/server";

initializeFirebase();

export async function POST(req: NextRequest, res: NextResponse) {}
