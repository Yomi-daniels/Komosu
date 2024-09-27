import Script from "next/script";

const MyScript = () => {
  return (
    <div>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script
        src="https://mediafiles.botpress.cloud/935ec3d1-76db-4b99-ae26-db94d2a39025/webchat/config.js"
        defer
      ></script>
    </div>
  );
};

export default MyScript;
