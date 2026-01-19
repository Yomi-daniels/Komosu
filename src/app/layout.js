// src/app/layout.js

import "./globals.css";
// import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Metadata } from "next";
import "remixicon/fonts/remixicon.css";
import MainNavigation from "./components/navbar/component/MainNavigation.jsx";
import { RequestAccessProvider } from "@/app/context/RequestAccessContext";
import GlobalRequestAccessModal from "./components/GlobalRequestAccessModal";
export const metadata = {
  title: "Carmosu",
  description:
    "Expert marketing and technology solutions to grow your dealership in the digital space. Learn more today!",
  openGraph: {
    title: "Carmosu",
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
    card: "summary_large_image",
    title: "Carmosu",
    description:
      "Creating opportunities for dealerships to thrive in the digital space.",
    images: [
      {
        url: "https://komosunetwork.com/twitter-image.jpg",
        width: 1200,
        height: 675,
        alt: "Komosu Network Twitter Banner",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="light-theme">
        <RequestAccessProvider>
          <div className="layout">
            <MainNavigation />

            <main className="content">
              {children}
            </main>

            <Footer />

            {/* Must be inside provider */}
            <GlobalRequestAccessModal />
          </div>
        </RequestAccessProvider>
      </body>
    </html>
  );
}
