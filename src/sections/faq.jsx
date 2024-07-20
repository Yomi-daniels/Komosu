'use client'
import { useState } from 'react';
import styles from './sections.module.css';
import { Shadows_Into_Light } from 'next/font/google';
import Image from 'next/image';

const shadow_Font = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400'],
});

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles.FAQSection}>
      <div className={styles.FAQHeaderContents}>
        <div className={styles.servicesSubTextContainer}>
          <div className={styles.blueBorder}></div>
          <p className={styles.servicesSubText}>FAQs</p>
        </div>
        <h2>
          Got <span className={`${styles.servicesSpan} ${shadow_Font.className}`}>Questions?</span> we have the answers right
          <span className={`${styles.servicesSpan} ${shadow_Font.className}`}> Here</span>
        </h2>
      </div>
      <div className={styles.FAQContainer}>
        <div className={styles.FAQline}>
          <Image src="/Group 2.png" alt="lines" fill />
        </div>
        {[...Array(3)].map((_, index) => (
          <div key={index} className={styles.FAQContainerContents}>
            <div className={styles.FAQContents} onClick={() => toggleFAQ(index)}>
              <h4>What Service Does Komosu Offer?</h4>
              <div className={styles.dropdownImg}>
                <Image src="/Frame 39.png" alt="Faq image" fill />
              </div>
            </div>
            <div className={`${styles.FAQAnswer} ${expandedIndex === index ? styles.expanded : ''}`}>
              <p>This is the answer to the question.</p>
            </div>
          </div>
        ))}
        <div className={styles.FAQline}>
          <Image src="/Group 3.png" alt="lines" fill />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
