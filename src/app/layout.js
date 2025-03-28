import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Metadata } from "next";

export const metadata = {
  title: "Komosu Network",
  description:
    "Expert marketing and technology solutions to grow your dealership in the digital space. Learn more today!",
  openGraph: {
    title: "Komosu Network",
    description:
      "Creating opportunities for dealerships to thrive in the digital space.",
    url: "https://komosunetwork.com/",
    siteName: "Komosu Network",
    images: [
      {
        url: "https://komosunetwork.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Komosu Network Banner",
        type: "image/jpeg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Correct card type
    title: "Komosu Network",
    description:
      "Creating opportunities for dealerships to thrive in the digital space.",
    images: [
      {
        url: "https://komosunetwork.com/twitter-image.jpg", // Different image for Twitter
        width: 1200, // Adjusted ratio for Twitter
        height: 675, // Closer to 1.91:1 (Twitter prefers 1200x675)
        alt: "Komosu Network Twitter Banner",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Expert marketing and technology solutions to grow your dealership in the digital space. Learn more today!"
        />

        {/* Open Graph Meta Tags (For WhatsApp, Facebook, LinkedIn) */}
        <meta property="og:title" content="Komosu Network" />
        <meta
          property="og:description"
          content="Creating opportunities for dealerships to thrive in the digital space."
        />
        <meta
          property="og:image"
          content="https://komosunetwork.com/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://komosunetwork.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Komosu Network" />
        <meta
          name="twitter:description"
          content="Creating opportunities for dealerships to thrive in the digital space."
        />
        <meta
          name="twitter:image"
          content="https://komosunetwork.com/og-image.jpg"
        />

        <title>Komosu Network</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
        />
      </head>

      <body data-theme="light">
        <div className="layout">
          <Navbar />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
