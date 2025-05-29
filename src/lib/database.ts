import Database from "better-sqlite3";
import { string } from "zod";
const db = new Database("contact.db", { verbose: console.log });

const initDb = () => {
  db.exec(`
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
};

initDb();

export const insertContact = ({
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
  const stmt = db.prepare(`
INSERT INTO contact_form (first_name, last_name, email, phone_number, message)
VALUES (?, ?, ?, ?, ?)
`);
  stmt.run(firstName, lastName, email || null, phoneNumber, message);
};
export const getAllContacts = () => {
  const stmt = db.prepare("SELECT * FROM contact_form");
  return stmt.all();
};
