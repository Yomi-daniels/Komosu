export default function PrivacyPage() {
  return (
    <div className="text-darkBlueText relative">
      <div className="flex flex-col gap-[16px] relative h-full">
        <h5 className="text-gray font-medium text-lg m-0 ">Privacy Policy</h5>
        <h1 className="text-[40px] font-bold m-0 md:text-[30px] sm:text-[30px] max-sm:text-[27px]">
          Komosu Privacy Policy
        </h1>
      </div>
      <div>
        <p className="text-[18px] font-regular leading-[150%] tracking-[2%] mt-[24px]">
          Your use of our Services is also governed by our Privacy Policy
          (coming soon). We respect your data and take appropriate steps to
          protect it.
        </p>

        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Changes to Terms</h5>

          <p>
            We may update these Terms from time to time. You will be notified of
            significant changes, and your continued use after updates means you
            accept the revised Terms.
          </p>
        </div>

        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">How We Use Your Information</h5>

          <p>
            We use the information we collect to provide, maintain, and improve
            our services, as well as to communicate with you about your account
            or our services.
          </p>
        </div>

        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Governing Law</h5>

          <p>
            These Terms are governed by the laws of [Your Country or State],
            without regard to conflict of law principles.
          </p>
        </div>
        {/* <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Your Rights</h5>

          <p>
            You have the right to access, update, or delete your personal
            information at any time. Please contact us if you have any concerns
            about your privacy.
          </p>
        </div> */}

        <div className="mt-[24px] text-[18px] relative">
          <p>
            For more information or questions about this privacy policy, please
            contact us at komosu@gmail.com.
          </p>

          <div className="flex flex-col gap-[8px]">
            <a
              href="mailto:komosunetwork@gmail.com"
              className="font-medium text-blueText"
            >
              komosunetwork@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
