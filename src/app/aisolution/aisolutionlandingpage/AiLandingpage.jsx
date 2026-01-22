"use client";

import { motion } from "framer-motion";
import { Target, CalendarCheck, Package, Focus, X, Check } from "lucide-react";

const targetAudience = [
  {
    icon: Target,
    title: "Run Paid Ads at Scale",
    description: "You invest seriously in search and social ads and expect those clicks to turn into real visits.",
    gradient: "linear-gradient(135deg, #f43f5e, #ec4899, #a855f7)",
  },
  {
    icon: CalendarCheck,
    title: "Need Faster Test-Drive Bookings",
    description: "Your ads generate interest, but too many buyers stall before booking a test drive.",
    gradient: "linear-gradient(135deg, #10b981, #14b8a6, #06b6d4)",
  },
  {
    icon: Package,
    title: " Prioritise What Actually Moves",
    description: "You want to decide which vehicles sell now instead of showing everything and hoping for the best.",
    gradient: "linear-gradient(135deg, #f59e0b, #f97316, #ef4444)",
  },
  {
    icon: Focus,
    title: "Value focus over flexibility",
    description: "You’re willing to trade choice and customization for speed, clarity, and action.",
    gradient: "linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhoItsFor = () => {
  return (
    <section style={styles.section}>
      {/* Background blurs */}
      <div style={styles.bgBlur1} />
      <div style={styles.bgBlur2} />
      <div style={styles.bgBlur3} />

      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.header}
        >
          {/* <span style={styles.badge}>
            <span style={styles.badgeDot} />
            Perfect Fit
          </span> */}
         <h2 className="font-bold text-darkBlueText text-[64px] mx-auto text-center leading-[120%] tracking-[-4%] max-md:text-[32px] max-sm:text-[24px]">
            Who <span className="font-custom text-btn">CarMosu</span> Is For
          </h2>
        
          <p className="tracking-[-2%] text-darkBlueText font-medium text-[18px] text-center max-sm:text-[16px]">
            Built for dealerships that run ads but want more showroom visits, <br /> not more browsing
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={styles.grid}
        >
          {targetAudience.map((item, index) => (
            <motion.div key={item.title} variants={itemVariants} style={styles.cardWrapper}>
              <div style={styles.card}>
                <div style={{ ...styles.iconBox, background: item.gradient }}>
                  <item.icon size={28} color="#fff" strokeWidth={2} />
                </div>
                <div style={styles.checkBox}>
                  <Check size={16} color="#16a34a" />
                </div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDesc}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Exclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={styles.exclusionWrapper}
        >
          <div style={styles.exclusion}>
            <div style={styles.xBox}>
              <X size={20} color="#94a3b8" />
            </div>
            <div>
              <p style={styles.exclusionSmall}>Looking for a website redesign?</p>
              <p style={styles.exclusionBold}>CarMosu is not for you</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    background: "white",
    padding: "46px 16px",
  },
  // bgBlur1: {
  //   position: "absolute",
  //   top: "-160px",
  //   right: "-160px",
  //   width: "600px",
  //   height: "600px",
  //   borderRadius: "50%",
  //   background: "linear-gradient(135deg, rgba(244,63,94,0.15), rgba(168,85,247,0.1))",
  //   filter: "blur(80px)",
  //   pointerEvents: "none",
  // },
  // bgBlur2: {
  //   position: "absolute",
  //   bottom: "0",
  //   left: "-160px",
  //   width: "500px",
  //   height: "500px",
  //   borderRadius: "50%",
  //   background: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.1))",
  //   filter: "blur(80px)",
  //   pointerEvents: "none",
  // },
  // bgBlur3: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: "400px",
  //   height: "400px",
  //   borderRadius: "50%",
  //   background: "rgba(251,191,36,0.08)",
  //   filter: "blur(80px)",
  //   pointerEvents: "none",
  // },
  container: {
    position: "relative",
    zIndex: 10,
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "64px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 20px",
    borderRadius: "9999px",
    background: "rgba(239,68,68,0.1)",
    color: "#ef4444",
    fontSize: "14px",
    fontWeight: 600,
    border: "1px solid rgba(239,68,68,0.2)",
    marginBottom: "24px",
  },
  badgeDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#ef4444",
    animation: "pulse 2s infinite",
  },
  title: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "clamp(32px, 5vw, 56px)",
    fontWeight: 700,
    color: "#1e293b",
    margin: 0,
  },
  gradientText: {
    background: "linear-gradient(135deg, #ef4444, #dc2626)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    marginTop: "24px",
    fontSize: "18px",
    color: "#64748b",
    maxWidth: "560px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  cardWrapper: {
    position: "relative",
  },
  card: {
    position: "relative",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(226,232,240,0.8)",
    borderRadius: "24px",
    padding: "32px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  iconBox: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  },
  checkBox: {
    position: "absolute",
    top: "32px",
    right: "32px",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "rgba(22,163,74,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "22px",
    fontWeight: 700,
    color: "#1e293b",
    margin: "0 0 12px 0",
  },
  cardDesc: {
    fontSize: "15px",
    color: "#64748b",
    lineHeight: 1.6,
    margin: 0,
  },
  exclusionWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "64px",
  },
  exclusion: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px 24px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(12px)",
    border: "1px solid #e2e8f0",
  },
  xBox: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #f1f5f9, #f8fafc)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #e2e8f0",
  },
  exclusionSmall: {
    fontSize: "14px",
    color: "#64748b",
    margin: 0,
  },
  exclusionBold: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#1e293b",
    margin: 0,
    fontFamily: "'Space Grotesk', sans-serif",
  },
};

export default WhoItsFor;
