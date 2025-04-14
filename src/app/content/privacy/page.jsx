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
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and protect your personal information.
        </p>
        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Services Offered</h5>
          <div className="mt-[7px] font-regular">
            <p>
              Komosu Network provides professional digital services including:
            </p>

            <li>Website Design and Development</li>
            <li>Lead Generation Services</li>
          </div>
          <p className="mt-[18px]">
            All services will be rendered based on a mutually agreed project
            scope, proposal, or contract.
          </p>
        </div>
        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Engagement & Payment</h5>
          <div className="mt-[7px] font-regular">
            <p>
              Komosu Network provides professional digital services including:
            </p>

            <li>
              Quotes & Proposals: Each project will begin with a written quote
              or proposal outlining the scope, timeline, and cost. Acceptance of
              the proposal is required to commence work.
            </li>
            <li>
              Payment Terms: A deposit (typically 50%) is required before the
              start of any project. The remaining balance is due upon completion
              or as otherwise specified
            </li>
            <li>
              Late Payments: Invoices not paid by the due date may incur a late
              fee of 5% per month or the maximum permitted by law.
            </li>
          </div>
        </div>
        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Client Responsibilities</h5>
          <div className="mt-[7px] font-regular">
            <p>You agree to:</p>

            <li>
              Provide all necessary content, assets, access, and feedback in a
              timely manner.
            </li>
            <li>
              Ensure all materials provided to Komosu Network are either owned
              by you or properly licensed.
            </li>
            <li>
              Review and approve work within specified timelines to avoid
              delays.
            </li>
          </div>
        </div>
        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Intellectual property</h5>
          <div className="mt-[7px] font-regular">
            <p> This states that:</p>

            <li>
              Ownership: Upon full payment, the final website design or lead
              generation assets become your property.
            </li>
            <li>
              Preliminary Work: Concepts, mockups, and drafts not chosen remain
              the intellectual property of Komosu Network.
            </li>
            <li>
              Third-Party Materials: You are responsible for obtaining licenses
              or rights for any third-party content you request us to use (e.g.,
              images, fonts, plugins).
            </li>
          </div>
        </div>
        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Confidentiality</h5>

          <p>
            {" "}
            Both parties agree to maintain the confidentiality of any
            proprietary or sensitive information exchanged during the project,
            including strategies, data, and materials.
          </p>
        </div>
        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Lead Generation Services</h5>
          <div className="mt-[7px] font-regular">
            <p>This states that:</p>

            <li>
              Komosu Network delivers leads based on the agreed-upon criteria
              (e.g., industry, location, target audience).
            </li>
            <li>
              While we aim to generate high-quality leads, we do not guarantee
              conversions or sales outcomes.
            </li>
            <li>
              It is your responsibility to follow up with leads and close sales.
            </li>
          </div>
        </div>
        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Termination</h5>
          <div className="mt-[7px] font-regular">
            <li>
              Komosu Network delivers leads based on the agreed-upon criteria
              (e.g., industry, location, target audience).
            </li>
            <li>
              In the event of termination, all completed work up to that point
              must be paid for, and Komosu Network retains rights to any unpaid
              deliverables.
            </li>
          </div>
        </div>
        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Disclaimer of warranties</h5>

          <p>
            {" "}
            All services are provided “as-is” without warranties of any kind.
            Komosu Network does not guarantee that your website or lead
            generation efforts will be free from errors, interruptions, or meet
            specific business outcomes.
          </p>
        </div>

        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Limitation of Liability</h5>

          <p>
            {" "}
            To the fullest extent permitted by law, Komosu Network shall not be
            liable for any indirect, incidental, special, or consequential
            damages, including but not limited to loss of profits, data, or
            business opportunities.
          </p>
        </div>

        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Changes to terms</h5>

          <p>
            Komosu Network reserves the right to modify these Terms at any time.
            Changes will become effective upon posting. Continued use of our
            services after updates constitutes your acceptance of the revised
            Terms.
          </p>
        </div>

        <div className="mt-[24px] text-[18px] relative">
          <h5 className="font-bold ">Contact Us</h5>

          <p>
            If you have any questions or concerns about these Terms, please
            reach out:
          </p>
          <p>Komosu Network</p>
          <div className="flex flex-col gap-[8px]">
            <a
              href="mailto:komosunetwork@gmail.com"
              className="font-medium text-blueText"
            >
              komosunetwork@gmail.com
            </a>
            <a href="tel:+44-234-23-4568">+44-234-23-4568</a>
            <address>230 Pine View, Birmingham. UK</address>
          </div>
        </div>
      </div>
    </div>
  );
}
