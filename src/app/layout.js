import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MyScript from "@/Script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon links with cache-busting query parameters */}
        <link
          rel="icon"
          href="/favicon.png?v=4"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/favicon.png?v=4"
          type="image/png"
          sizes="16x16"
        />
        <link rel="apple-touch-icon" href="/favicon.png?v=4" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Font and other external links */}
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
      </head>

      <body>
        <div className="layout">
          <Navbar />
          <main className="content">{children}</main>
          <Footer />
        </div>
        <MyScript />
      </body>
    </html>
  );
}
