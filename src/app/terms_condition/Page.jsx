import React from "react";

const Terms_condition = () => {
  return (
    <div
      className={`${"flex justify-center items-center h-1/2 bg-gray-100 overflow-y-hidden z-20 "} ${montserrat.className}`}
    >
      <div className="max-w-4xl w-full px-6 py-12 shadow-lg rounded-lg mt-[10rem] bg-blue-800 text-white ">
        <h1 className="text-2xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className=" text-sm text-center mb-8">
          Your privacy is important to us. This privacy policy <br /> explains
          how we collect, use, and protect your personal information.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4 text-sm">
          We may collect personal information such as your name, email address,
          phone number, and other details when you interact with our services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <p className="mb-4 text-sm">
          We use the information we collect to provide, maintain, and improve
          our services, as well as to communicate with you about your account or
          our services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          Sharing Your Information
        </h2>
        <p className="mb-4 text-sm">
          We do not share your personal information with third parties without
          your consent, except as necessary to provide our services or comply
          with legal obligations.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4 text-sm">
          You have the right to access, update, or delete your personal
          information at any time. Please contact us if you have any concerns
          about your privacy.
        </p>
        <p className="mb-4 text-sm ">
          For more information or questions about this privacy policy, please
          contact us at <a href="mailto:komosu@gmail.com">komosu@gmail.com</a>.
        </p>
        <p className="text-center mt-8 font-semibold">Last updated: 08/12/24</p>
      </div>
    </div>
  );
};

export default Page;
Terms_condition;
