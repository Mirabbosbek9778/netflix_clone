import Favourite from "@/database/favourite";
import { connectToDatabase } from "@/lib/mongoose";
import { FavouriteProps } from "@/types";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body: FavouriteProps = await req.json();

    const { uid, accountId, movieId } = body;

    const isExist = await Favourite.findOne({ uid, movieId, accountId });

    if (isExist) {
      return NextResponse.json({
        success: false,
        messaga: "Alredy acount adeed",
      });
    }

    const favourite =await Favourite.create(body);

    return NextResponse.json({
      success: true,
      data: favourite,
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      messaga: "Something went wrong",
    });
  }
}

export async function GET(req: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const uid = searchParams.get("uid");

    const accountId = searchParams.get("accountId");

    const favourites = await Favourite.find({ uid, accountId });

    return NextResponse.json({
      success: true,
      data: favourites,
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      messaga: "Something went wrong",
    });
  }
}

export async function DELETE(req: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    await Favourite.findByIdAndDelete(id);

    return NextResponse.json({ success: true, data: "Successfully deleted" });
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
