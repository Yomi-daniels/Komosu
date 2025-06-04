import { insertContact } from "@/lib/database";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  console.log("API route called");
  try {
    console.log("Parsing request body...");
    const { firstName, lastName, workEmail, phoneNumber, message } =
      await request.json();
    console.log("Request body parsed:", {
      firstName,
      lastName,
      workEmail,
      phoneNumber,
      message,
    });

    // Validate required fields
    if (!firstName || !lastName || !phoneNumber || !message) {
      console.log("Validation failed: missing required fields");
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert into SQLite database
    console.log("Inserting into database...");
    await insertContact({
      firstName,
      lastName,
      email: workEmail,
      phoneNumber,
      message,
    });
    console.log("Insert successful");

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
