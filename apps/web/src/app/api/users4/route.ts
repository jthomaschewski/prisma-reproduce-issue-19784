import { prisma } from "@prisma-repro/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(await prisma.user.findMany());
}
