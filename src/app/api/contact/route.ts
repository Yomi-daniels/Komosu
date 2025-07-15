import { insertContact } from "@/lib/database";
import { NextResponse } from "next/server";

<<<<<<< HEAD
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
=======
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
>>>>>>> 5fd7b8e (Bring selected updated files from backend branch)
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

<<<<<<< HEAD
=======
    // Insert into SQLite database
    console.log("Inserting into database...");
>>>>>>> 5fd7b8e (Bring selected updated files from backend branch)
    await insertContact({
      firstName,
      lastName,
      email: workEmail,
      phoneNumber,
      message,
    });
<<<<<<< HEAD
  } catch (error) {
    console.error("Error inserting contact:", error);
=======
    console.log("Insert successful");

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in API route:", error);
>>>>>>> 5fd7b8e (Bring selected updated files from backend branch)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
<<<<<<< HEAD
=
=======
>>>>>>> 5fd7b8e (Bring selected updated files from backend branch)
