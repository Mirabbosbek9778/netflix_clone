import Account from "@/database/account";
import { connectToDatabase } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { name, pin, uid } = await req.json();

    const isExist = await Account.findOne({ name });

    const allAccounts = await Account.find({ uid });

    if (isExist) {
      return NextResponse.json({ success: false, message: "Account bor" });
    }

    if (allAccounts && allAccounts.length === 2) {
      return NextResponse.json({
        success: false,
        message: "faqat 2ta Account kirita olasan",
      });
    }
    const hashPin = await hash(pin, 10);

    const account = await Account.create({ name, pin: hashPin, uid });

    return NextResponse.json({ account });
  } catch (e) {
    return NextResponse.json({ success: false, message: "hato" });
  }
}
