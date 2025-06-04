import { open } from "sqlite";
import sqlite3 from "sqlite3";

// Initialize the database
const initDb = async () => {
  const db = await open({
    filename: "contact.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS contact_form (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT,
      phone_number TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return db;
};

export const insertContact = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}: {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber: string;
  message: string;
}) => {
  console.log("Received data in insertContact:", {
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
  });
  if (!firstName || !lastName || !phoneNumber || !message) {
    throw new Error(
      "Missing required fields in insertContact: " +
        JSON.stringify({ firstName, lastName, phoneNumber, message })
    );
  }

  const db = await initDb();
  try {
    await db.run(
      `
      INSERT INTO contact_form (first_name, last_name, email, phone_number, message)
      VALUES (?, ?, ?, ?, ?)
    `,
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    );
    console.log("Insert executed successfully");
  } finally {
    await db.close();
  }
};

// Optional: Function to retrieve all contacts (for admin purposes)
export const getAllContacts = async () => {
  const db = await initDb();
  const rows = await db.all("SELECT * FROM contact_form");
  await db.close();
  return rows;
};
