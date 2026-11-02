import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import styles from './books.module.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://wfaglobal.com'),
  title: 'Ravi S. Bhagavatula — Bounded Agency & Books',
  description:
    'AI governance is much more than policies and PDFs. Books by Ravi S. Bhagavatula, PhD, CFA: Bounded Agency, AI in Finance, and The Entrepreneur’s Journey.',
  openGraph: {
    title: 'Ravi S. Bhagavatula — Bounded Agency & Books',
    description: 'Are you in control of your AI? AI governance is much more than policies and PDFs.',
    url: 'https://wfaglobal.com/books',
    images: ['/books/bounded-agency.jpg'],
  },
  // Unlisted page: reachable only by direct link (e.g. LinkedIn), not via site navigation or search engines.
  robots: { index: false, follow: false },
}

const books = [
  {
    role: 'The framework',
    title: 'Bounded Agency',
    subtitle: 'Who Is in Control in the Age of AI?',
    cover: '/books/bounded-agency.jpg',
    w: 372,
    h: 496,
    alt: 'Cover of Bounded Agency by Ravi S. Bhagavatula',
    text: 'How do we govern what we cannot see or slow down? The book introduces the Bounded Agency Limit and, through the archetypes TARZ (bounded by design) and VIKKY (unbounded), traces the silent migration of authority from people to systems. Build TARZ or drift toward VIKKY.',
    link: 'https://readerdepot.com/books/bounded-agency/',
  },
  {
    role: 'Applied to finance',
    title: 'AI in Finance: Agentic Financial Organizations',
    subtitle: 'With P. K. Prasanna Kumar',
    cover: '/books/ai-in-finance.jpg',
    w: 760,
    h: 1170,
    alt: 'Cover of AI in Finance: Agentic Financial Organizations by Ravi S. Bhagavatula and P. K. Prasanna Kumar',
    text: 'AI agency without boundaries creates risk; automation without judgment makes risk unmanageable. For boards, senior management, risk and technology teams, an architectural framework for adopting bounded agentic AI — scaling intelligence without surrendering accountability.',
    link: 'https://www.amazon.com/dp/B0GWZWQ9WY',
  },
  {
    role: 'The leader’s discipline',
    title: 'The Entrepreneur’s Journey',
    subtitle: '18-Stage Framework from Inner Conflict to Scalable Leadership',
    cover: '/books/entrepreneurs-journey.jpg',
    w: 376,
    h: 564,
    alt: 'Cover of The Entrepreneur’s Journey by Ravi S. Bhagavatula',
    text: 'Human agency starts with the person who must act. Eighteen stages of responsible action, read through the Bhagavad Gita as a structural map and grounded in MAG7 and Global25 companies. In the age of AI, the stages stay the same; the consequences grow larger.',
    link: 'https://www.amazon.com/s?k=The+Entrepreneur%27s+Journey+Bhagavatula&i=stripbooks',
  },
]

// SSRN working papers, grouped by theme, newest first. URL: https://ssrn.com/abstract=<id>
const paperGroups = [
  {
    theme: 'Bounded Agency in AI Systems',
    papers: [
      { id: '6916678', date: 'Jun 2026', title: 'Bounded Agency in the Age of AI', subtitle: 'Institutional Foundations and Domain Applications' },
      { id: '6912758', date: 'Jun 2026', title: 'Six Failure Modes of AI Delegation', subtitle: 'Deriving the Bounded Agency Primitives from a Feasibility Constraint for Intervention' },
      { id: '6352698', date: 'Mar 2026', title: 'Bounded Agency: An Ethical and Institutional Limit for Autonomous AI Systems' },
      { id: '6328579', date: 'Mar 2026', title: 'Institutions, Organizations, and the Bounded Agency Imperative', subtitle: 'Rethinking Governance Design in the Age of Agentic AI' },
      { id: '6067968', date: 'Jan 2026', title: 'Bounded Agency in the Age of AI', subtitle: 'Decision Rights, Responsibility, and Governance Under Automation' },
    ],
  },
  {
    theme: 'Inference Models',
    papers: [
      { id: '7296798', date: 'Aug 2026', title: 'Mechanism-informed Inference Models', subtitle: 'A Category, and Its Scope Conditions' },
    ],
  },
  {
    theme: 'Human Agency and Its Implications',
    papers: [
      { id: '6463438', date: 'Mar 2026', title: 'Development Resilience as a Missing State Variable for the Age of AI', subtitle: 'Empirical Evidence and Implications for GDP and Sovereign Risk' },
      { id: '6061414', date: 'Jan 2026', title: 'The Human Development Spread (HDS)', subtitle: 'Why Economic Growth Can Coexist with Rising Human Fragility in the Age of AI' },
      { id: '6026234', date: 'Jan 2026', title: 'Gross Domestic Human Progress (GDHP)', subtitle: 'A Beyond-GDP Framework for Measuring Human Development in the Age of AI' },
    ],
  },
]

const principles = [
  { n: '01', title: 'Authority Boundary', text: 'Explicit limits on what the system may decide — enforced in the system, not merely defined in policy.' },
  { n: '02', title: 'Intervention Right', text: 'Protected override without penalty — a human can act before the outcome is fixed.' },
  { n: '03', title: 'Tempo Matching', text: 'Governance that operates at execution speed, not at the pace of committees.' },
  { n: '04', title: 'Reauthorization Cycle', text: 'Authority expires and must be renewed, so it cannot drift unchecked.' },
  { n: '05', title: 'Safe Mode & Rollback', text: 'Degraded states between full operation and shutdown, with a path back.' },
  { n: '06', title: 'Accountability Mapping', text: 'Responsibility matched to the actual capacity to intervene.' },
]

export default function Books() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <p className={styles.identity}>
              <strong>Ravi S. Bhagavatula, PhD, CFA</strong>
              <span className={styles.identitySep} aria-hidden="true">|</span>
              <span className={styles.identityTag}>Books &amp; Research</span>
            </p>
            <p className={styles.kicker}>Are you in control of your AI?</p>
            <h1 className={styles.heroTitle}>AI governance is much more than policies and PDFs.</h1>
            <p className={styles.heroLead}>
              It is a question of design feasibility: whether human agency can still be exercised — to see, to slow
              down, to intervene — once AI acts at execution speed.
            </p>
            <div className={styles.ctas}>
              <a href="#books" className={styles.btnPrimary}>Explore my books &amp; research</a>
              <a href="#contact" className={styles.btnGhost}>Get in touch</a>
            </div>
            <p className={styles.byline}>
              Author of <em>Bounded Agency</em> — A Practical Framework for Governing AI Systems
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.split}>
              <div className={styles.splitHead}>
                <p className={styles.eyebrow}>The idea</p>
                <h2 className={styles.h2}>The limit is not intelligence. It is authority.</h2>
              </div>
              <div className={styles.splitBody}>
                <p>
                  As delegated AI agency scales, execution remains flawless — but authority is no longer reclaimable.
                  The organization becomes a spectator to its own decisions.
                </p>
                <p>
                  A policy can say who should decide. Only design determines whether a human still can. Governance
                  becomes real when it is built into the system, not written beside it.
                </p>
              </div>
            </div>
            <div className={styles.primHead}>
              <h3 className={styles.h3}>The six governability primitives</h3>
              <p>
                The minimum needed to govern a single AI agent. When multiple agents interact, governance demands
                considerably more.
              </p>
            </div>
            <div className={styles.principles}>
              {principles.map((p) => (
                <div key={p.n} className={styles.principle}>
                  <div className={styles.pNum}>{p.n}</div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>

            <div className={styles.reclaim}>
              <div className={styles.reclaimDef}>
                <p className={styles.eyebrowLight}>Reclaimability is the test</p>
                <h3 className={styles.reclaimTitle}>Reclaimability</h3>
                <p className={styles.reclaimLead}>
                  The degree to which authorized humans can understand, interrupt, constrain, reverse, or withdraw
                  delegated authority before unacceptable consequences become irreversible.
                </p>
                <p className={styles.reclaimBody}>
                  It is distinct from accountability, which is retrospective, and from oversight, which may be purely
                  observational. Reclaimability is prospective, tempo-sensitive and architecturally grounded. A system
                  can be technically stoppable and still not reclaimable.
                </p>
              </div>
              <div className={styles.reclaimTest}>
                <h4 className={styles.testTitle}>The Reclaimability Test</h4>
                <p className={styles.testIntro}>Two conditions must hold at the same time.</p>
                <div className={styles.testItem}>
                  <p className={styles.testName}>1 · Temporal feasibility</p>
                  <p>Intervention arrives before harm becomes irreversible.</p>
                  <p className={styles.formula}>L<sub>rec</sub> ≤ T<sub>harm</sub></p>
                </div>
                <div className={styles.testItem}>
                  <p className={styles.testName}>2 · Capacity feasibility</p>
                  <p>Escalations do not exceed what human oversight can absorb.</p>
                  <p className={styles.formula}>r<sub>E</sub> · p<sub>esc</sub> · w ≤ r<sub>O</sub></p>
                </div>
                <p className={styles.testNote}>Meeting only one produces the appearance of control, not governability.</p>
              </div>
            </div>

            <p className={styles.motto}>Bounded agency does not emerge. It must be designed.</p>
          </div>
        </section>

        <section id="books" className={`${styles.section} ${styles.tinted}`}>
          <div className={styles.wrap}>
            <p className={styles.eyebrow}>My books</p>
            <h2 className={styles.h2}>An argument that threads three books.</h2>
            <p className={styles.sectionLead}>
              The framework, its application to financial institutions, and the human discipline of responsible action
              that sits underneath both.
            </p>
            <div className={styles.bookGrid}>
              {books.map((b) => (
                <article key={b.title} className={styles.book}>
                  <p className={styles.role}>{b.role}</p>
                  <Image src={b.cover} alt={b.alt} width={b.w} height={b.h} className={styles.cover} />
                  <h3 className={styles.bookTitle}>{b.title}</h3>
                  <p className={styles.bookSub}>{b.subtitle}</p>
                  <p className={styles.bookText}>{b.text}</p>
                  <a href={b.link} target="_blank" rel="noopener noreferrer" className={styles.bookLink}>
                    Book Link
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className={styles.section}>
          <div className={styles.wrap}>
            <p className={styles.eyebrow}>Research</p>
            <h2 className={styles.h2}>Selected Research</h2>
            <p className={styles.sectionLead}>
              On Bounded Agency in AI systems, inference models, and human agency and its implications — all
              available on SSRN.
            </p>
            {paperGroups.map((g) => (
              <div key={g.theme} className={styles.paperGroup}>
                <h3 className={styles.paperTheme}>{g.theme}</h3>
                <ul className={styles.paperList}>
                  {g.papers.map((p) => (
                    <li key={p.id} className={styles.paperRow}>
                      <span className={styles.paperDate}>{p.date}</span>
                      <span className={styles.paperText}>
                        <span className={styles.paperTitle}>{p.title}</span>
                        {p.subtitle && <span className={styles.paperSub}>{p.subtitle}</span>}
                      </span>
                      <a
                        href={`https://ssrn.com/abstract=${p.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.paperLink}
                        aria-label={`Read “${p.title}” on SSRN`}
                      >
                        Read on SSRN →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.ruled}`}>
          <div className={styles.wrap}>
            <div className={styles.split}>
              <div className={styles.splitHead}>
                <Image
                  src="/books/ravi-headshot.jpg"
                  alt="Ravi S. Bhagavatula"
                  width={320}
                  height={320}
                  className={styles.headshot}
                />
                <p className={styles.eyebrow}>About</p>
                <h2 className={styles.h2}>Ravi S. Bhagavatula, PhD, CFA</h2>
              </div>
              <div className={styles.splitBody}>
                <p>
                  Ravi coined the concept of Bounded Agency in AI systems — where autonomous action should be permitted
                  and where human responsibility must hold — and develops it through a background in physics, finance
                  and interdisciplinary research.
                </p>
                <p>
                  He is Managing Partner at WFA Global Investments, a multi-strategy investor across public and
                  private markets and alternative investments, with interests spanning frontier technologies,
                  quantum computing and AI governance.
                </p>
                <p className={styles.links}>
                  <a href="https://www.linkedin.com/in/rbhagavatula" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://ravisbhagavatula.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <div className={`${styles.wrap} ${styles.contactGrid}`}>
            <div>
              <p className={styles.eyebrowLight}>Get in touch</p>
              <h2 className={styles.h2Light}>Is your AI governable by design?</h2>
              <p className={styles.contactLead}>
                For briefings, board conversations, research collaboration, partnerships or speaking, send a note and
                I’ll reply personally.
              </p>
              <ul className={styles.contactList}>
                <li>AI governance briefings</li>
                <li>Board and executive advisory</li>
                <li>Research collaboration</li>
                <li>Partnership explorations</li>
                <li>Speaking, book events and bulk orders</li>
              </ul>
            </div>
            <div className={styles.formCard}>
              <ContactForm
                source="books"
                topics={[
                  'General inquiry',
                  'AI governance briefing',
                  'Board or executive advisory',
                  'Research collaboration',
                  'Partnership exploration',
                  'Speaking, book events and bulk orders',
                ]}
                fallbackEmail="ravi@wfaglobal.com"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
