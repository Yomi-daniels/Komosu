
import aboutstyles from "../about/aboutSection.module.css"
// import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";
// const shadows = Shadows_Into_Light({
//   subsets: ["latin"],
//   weight: ["400"],
// });
const StackedCard= () => {
  return (
    <section className={aboutstyles.MeetOurTeamSection}>
      <div className={aboutstyles.MeetOurTeamContainer}>
      <div
          className={`${aboutstyles.aboutPageHeader} ${aboutstyles.MeetOurTeamHeader}`}
        >
          <h2>
        
            
            <span className={`${aboutstyles.aboutUsSpan}`}>
            Dealer Hub -{" "}
            </span>{" "}

            Your Dealership’s <br /> Social Media Website
          </h2>
          <p> Own Your Audience. Build Trust. Sell More Cars.</p>
        </div>
        <div className={`${aboutstyles.teamContainer} `}>
          <div className={`${aboutstyles.team} ${aboutstyles.team1}${aboutstyles.teamCars}`}>
            <div className={aboutstyles.teamImage}>
              <Image
                src="/webdevimg (1).png"
                fill
                style={{ borderRadius: "10px" }}
                objectFit="cover"
              />
            </div>
            {/* <span className={`${aboutstyles.TeamRole} ${shadows.className}`}>
              CEO + FOUNDER
            </span> */}
            <p className={aboutstyles.teamcontent}>
            💬 Engage directly with buyers – no algorithm limits.
            </p>
          </div>
          <div className={`${aboutstyles.team} ${aboutstyles.team2}`}>
            <div className={aboutstyles.teamImage}>
              <Image
               src="/webdevimg (2).png"
                fill
                style={{ borderRadius: "10px" }}
                objectFit="cover"
              />
            </div>
            {/* <span className={`${aboutstyles.TeamRole} ${shadows.className}`}>
              HEAD OF MARKETING
            </span> */}
            <p className={aboutstyles.teamcontent}>
            Grow your own customer network – not Facebook’s.
            </p>
          </div>
          <div className={`${aboutstyles.team} ${aboutstyles.team3}`}>
            <div className={aboutstyles.teamImage}>
              <Image
           src="/webdevimg (3).png"
                fill
                style={{ borderRadius: "10px" }}
                objectFit="cover"
              />
            </div>
            {/* <span className={`${aboutstyles.TeamRole} ${shadows.className}`}>
              CEO + FOUNDER
            </span> */}
            <p className={aboutstyles.teamcontent}>
            💰 Turn views into leads & sales – all within your platform.
            </p>
          </div>
          {/* <div className={`${aboutstyles.team} ${aboutstyles.team4}`}>
            <div className={aboutstyles.teamImage}>
              <Image
           src="/webdevimg (1).png"
                fill
                style={{ borderRadius: "10px" }}
                objectFit="cover"
              />
            </div>
            <span className={`${aboutstyles.TeamRole} ${shadows.className}`}>
              CEO + FOUNDER
            </span>
            <p className={aboutstyles.teamcontent}>
            📈 Grow your own customer network – not Facebook’s
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default StackedCard;
