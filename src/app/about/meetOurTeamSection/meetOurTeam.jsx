import aboutstyles from "../aboutSection.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";
const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const MeetOurTeamSection = () => {
  return (
    <section className={aboutstyles.MeetOurTeamSection}>
      <div className={aboutstyles.MeetOurTeamContainer}>
        <div
          className={`${aboutstyles.aboutPageHeader} ${aboutstyles.MeetOurTeamHeader}`}
        >
          <h2>
            {" "}
            Meet our{" "}
            <span className={`${aboutstyles.aboutUsSpan} ${shadows.className}`}>
              team
            </span>{" "}
          </h2>
          <p>Discover the brains behind our success - Get to know them</p>
        </div>
        <div className={aboutstyles.teamContainer}>
          <div className={`${aboutstyles.team} ${aboutstyles.team1}`}>
            <div className={aboutstyles.teamImage}>
              <Image
                src="/team1.png"
                fill
                style={{ borderRadius: "10px" }}
                objectFit="cover"
              />
            </div>
            <span className={`${aboutstyles.TeamRole} ${shadows.className}`}>
              CEO + FOUNDER
            </span>
            <p className={aboutstyles.teamcontent}>
              Tyler is a seasoned professional with over 10 years experience in
              business management. He is always ready and available to lend a
              helping hand.
            </p>
          </div>
          <div className={`${aboutstyles.team} ${aboutstyles.team2}`}>
            <div className={aboutstyles.teamImage}>
              <Image
                src="/team2.png"
                fill
                style={{ borderRadius: "10px" }}
                objectFit="cover"
              />
            </div>
            <span className={`${aboutstyles.TeamRole} ${shadows.className}`}>
              HEAD OF MARKETING
            </span>
            <p className={aboutstyles.teamcontent}>
              Tyler is a seasoned professional with over 10 years experience in
              business management. He is always ready and available to lend a
              helping hand.
            </p>
          </div>
          <div className={`${aboutstyles.team} ${aboutstyles.team3}`}>
            <div className={aboutstyles.teamImage}>
              <Image
                src="/team3.png"
                fill
                style={{ borderRadius: "10px" }}
                objectFit="cover"
              />
            </div>
            <span className={`${aboutstyles.TeamRole} ${shadows.className}`}>
              CEO + FOUNDER
            </span>
            <p className={aboutstyles.teamcontent}>
              Tyler is a seasoned professional with over 10 years experience in
              business management. He is always ready and available to lend a
              helping hand.
            </p>
          </div>
          <div className={`${aboutstyles.team} ${aboutstyles.team4}`}>
            <div className={aboutstyles.teamImage}>
              <Image
                src="/team4.png"
                fill
                style={{ borderRadius: "10px" }}
                objectFit="cover"
              />
            </div>
            <span className={`${aboutstyles.TeamRole} ${shadows.className}`}>
              CEO + FOUNDER
            </span>
            <p className={aboutstyles.teamcontent}>
              Tyler is a seasoned professional with over 10 years experience in
              business management. He is always ready and available to lend a
              helping hand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeamSection;
