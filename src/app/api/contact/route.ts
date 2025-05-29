import { insertContact } from "@/lib/database";
import { NextResponse } from "next/server";

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const { firstName, lastName, workEmail, phoneNumber, message } =
      await req.json();

    if (!firstName || !lastName || !phoneNumber || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await insertContact({
      firstName,
      lastName,
      email: workEmail,
      phoneNumber,
      message,
    });
  } catch (error) {
    console.error("Error inserting contact:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
=