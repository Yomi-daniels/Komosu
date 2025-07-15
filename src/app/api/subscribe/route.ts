import { insertSubscription } from "@/lib/database";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  console.log("Subscribe API route called");

  try {
    const { email } = await request.json();
    console.log("Recieved email: ", email);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    await insertSubscription({ email });
    console.log("Subscription inserted");
    return NextResponse.json(
      { message: "Subscribed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in subscribe API route:", error);
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
