import type { Metadata } from "next";
import Image from "next/image";
import styles from "./academic.module.css";

export const metadata: Metadata = {
  title: "Qingyue Cai — Academic Profile",
  description: "Academic profile and research portfolio of Qingyue Cai.",
};

const researchAreas = [
  {
    index: "01",
    title: "Human–AI Co-Creation",
    text: "How people form ideas, make decisions, and develop creative work together with intelligent systems.",
  },
  {
    index: "02",
    title: "Creative AI & Interaction",
    text: "Designing thoughtful interfaces and research methods for expressive, understandable, and responsible AI tools.",
  },
  {
    index: "03",
    title: "Speculative Futures",
    text: "Using prototypes, workshops, and storytelling to examine the social and cultural possibilities of emerging technology.",
  },
];

const workItems = [
  {
    type: "Current research",
    title: "Creative collaboration with intelligent systems",
    detail: "Research framework · Study design · Ongoing",
  },
  {
    type: "Project direction",
    title: "Tools for reflective and expressive AI use",
    detail: "Interaction design · Prototyping · Evaluation",
  },
  {
    type: "Public engagement",
    title: "Science, art, and emerging technologies",
    detail: "Workshop · Exhibition · Cross-cultural collaboration",
  },
];

export default function AcademicProfile() {
  return (
    <main className={styles.site}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Back to top">
          <span className={styles.brandMark}>QC</span>
          <span>Academic Profile</span>
        </a>
        <nav className={styles.nav} aria-label="Profile navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.kicker}>
            <span className={styles.liveDot} />
            Academic profile · Draft 01
          </div>
          <h1>
            Qingyue
            <br />
            <span>Cai</span>
          </h1>
          <p className={styles.heroStatement}>
            Exploring how people create, think, and collaborate with intelligent systems.
          </p>
          <p className={styles.affiliation}>Renmin University of China</p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#work">View selected work</a>
            <a className={styles.secondaryAction} href="#contact">Get in touch ↗</a>
          </div>
        </div>

        <div className={styles.portraitColumn}>
          <div className={styles.portraitLabel}>Portrait / 2026</div>
          <div className={styles.portraitFrame}>
            <Image
              src="/images/people/qingyue-cai-profile.jpg?v=1"
              alt="Portrait of Qingyue Cai"
              fill
              priority
              sizes="(max-width: 760px) 88vw, 38vw"
              className={styles.portrait}
            />
            <span className={styles.cornerTop} />
            <span className={styles.cornerBottom} />
          </div>
          <div className={styles.coordinates}>
            <span>RESEARCH · DESIGN · TECHNOLOGY</span>
            <span>CN / 01</span>
          </div>
        </div>
      </section>

      <div className={styles.signalStrip} aria-hidden="true">
        <span>Human–Computer Interaction</span>
        <span>Creative AI</span>
        <span>Human–AI Co-Creation</span>
        <span>Speculative Design</span>
      </div>

      <section id="about" className={styles.section}>
        <div className={styles.sectionIndex}>01 / About</div>
        <div className={styles.aboutGrid}>
          <h2>Research with people at the center.</h2>
          <div className={styles.bodyCopy}>
            <p>
              My work explores the relationship between human creativity, emerging
              technologies, and the systems through which people imagine and build
              possible futures.
            </p>
            <p>
              I am interested in research that moves between careful observation,
              participatory inquiry, interaction design, and public-facing creative
              practice.
            </p>
            <p className={styles.editNote}>This biography is starter copy and can be replaced with your final academic bio.</p>
          </div>
        </div>
      </section>

      <section id="research" className={styles.section}>
        <div className={styles.sectionIndex}>02 / Research directions</div>
        <div className={styles.researchGrid}>
          {researchAreas.map((area) => (
            <article key={area.index} className={styles.researchCard}>
              <span>{area.index}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className={styles.section}>
        <div className={styles.sectionIndex}>03 / Selected work</div>
        <div className={styles.workList}>
          {workItems.map((item, index) => (
            <article key={item.title} className={styles.workItem}>
              <span className={styles.workNumber}>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className={styles.workType}>{item.type}</p>
                <h3>{item.title}</h3>
              </div>
              <p className={styles.workDetail}>{item.detail}</p>
              <span className={styles.workArrow}>↗</span>
            </article>
          ))}
        </div>
        <div className={styles.publicationPlaceholder}>
          <span>Publications</span>
          <p>Publication entries, PDF links, DOI information, and citation details can be added here.</p>
        </div>
      </section>

      <section id="contact" className={`${styles.section} ${styles.contact}`}>
        <div className={styles.sectionIndex}>04 / Contact</div>
        <div className={styles.contactGrid}>
          <h2>Ideas, research, and collaborations.</h2>
          <div>
            <p>
              For research conversations, project collaborations, or speaking enquiries,
              add your preferred academic email and profile links below.
            </p>
            <div className={styles.contactLinks}>
              <span>Email address to be added</span>
              <span>Google Scholar ↗</span>
              <span>ORCID ↗</span>
              <span>CV / PDF ↗</span>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Qingyue Cai · Academic Profile</span>
        <span>Designed for research, teaching, and creative practice</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
