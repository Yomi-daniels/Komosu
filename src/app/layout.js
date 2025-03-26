import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "Komosu Network | Digital Growth for Dealerships",
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
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Komosu Network",
    description:
      "Creating opportunities for dealerships to thrive in the digital space.",
    images: ["https://komosunetwork.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
