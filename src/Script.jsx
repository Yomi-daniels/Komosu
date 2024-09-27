import Script from "next/script";

const MyScript = () => {
  return (
    <div>
      {/* External script injected asynchronously */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v1/inject.js"
        strategy="afterInteractive" // Ensure it's loaded after the page becomes interactive
      />

      {/* Another external script with defer behavior */}
      <Script
        src="https://mediafiles.botpress.cloud/935ec3d1-76db-4b99-ae26-db94d2a39025/webchat/config.js"
        strategy="afterInteractive" // Defer loading until after the page is interactive
      />
    </div>
  );
};

export default MyScript;
