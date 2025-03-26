import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MyScript from "@/Script";
import { title } from "@/utils/siteMetaData";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Komosu Network | Digital Growth for Dealerships</title>
        {/* Favicon */}
        <link
          rel="icon"
          href="/favicon-512x512.png"
          type="image/png"
          sizes="512x512"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Font & Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"
          integrity="sha512-OQDNdI5rpnZ0BRhhJc+btbbtnxaj+LdQFeh0V9/igiEPDiWE2fG+ZsXl0JEH+bjXKPJ3zcXqNyP4/F/NegVdZg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:title"
          content="Komosu Network | Digital Growth for Dealerships"
        />
        <meta
          property="og:description"
          content="Expert marketing and technology solutions to grow your dealership in the digital space. Learn more today!"
        />
        <meta
          property="og:image"
          content="https://komosunetwork.com/logo.png"
        />

        <meta property="og:url" content="https://komosunetwork.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Komosu Network | Digital Growth for Dealerships"
        />
        <meta
          name="twitter:description"
          content="Expert marketing and technology solutions to grow your dealership in the digital space. Learn more today!"
        />
        <meta
          name="twitter:image"
          content="https://komosunetwork.com/og-image.jpg"
        />
      </head>

      <body data-theme="light">
        <div className="layout">
          <Navbar />
          <main className="content">{children}</main>
          <Footer />
        </div>
        {/* Uncomment when needed */}
        {/* <MyScript /> */}
      </body>
    </html>
  );
}
