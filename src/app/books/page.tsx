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
    'AI governance is more than policies and PDFs. Books by Ravi S. Bhagavatula, PhD, CFA: Bounded Agency, AI in Finance, and The Entrepreneur’s Journey.',
  openGraph: {
    title: 'Ravi S. Bhagavatula — Bounded Agency & Books',
    description: 'AI governance is more than policies and PDFs. It is a question of design feasibility.',
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
    link: 'https://www.amazon.com/s?k=9798902318118&i=stripbooks',
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
            <p className={styles.eyebrow}>AI Governance · Bounded Agency</p>
            <h1 className={styles.heroTitle}>AI governance is more than policies and PDFs.</h1>
            <p className={styles.heroLead}>
              It is a question of design feasibility: whether human agency can still be exercised — to see, to slow
              down, to intervene — once AI acts at execution speed.
            </p>
            <div className={styles.ctas}>
              <a href="#books" className={styles.btnPrimary}>View my books</a>
              <a href="#contact" className={styles.btnGhost}>Get in touch</a>
            </div>
            <p className={styles.byline}>
              <strong>Ravi S. Bhagavatula, PhD, CFA</strong> · Author of <em>Bounded Agency</em> — A Framework for AI Systems
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
            <p className={styles.motto}>Bounded agency does not emerge. It must be designed.</p>
          </div>
        </section>

        <section id="books" className={`${styles.section} ${styles.tinted}`}>
          <div className={styles.wrap}>
            <p className={styles.eyebrow}>My books</p>
            <h2 className={styles.h2}>One argument, three books.</h2>
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

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.split}>
              <div className={styles.splitHead}>
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
                For briefings, board conversations, speaking or bulk copies of the books, send a note and I’ll reply
                personally.
              </p>
              <ul className={styles.contactList}>
                <li>AI governance briefings</li>
                <li>Board and executive advisory</li>
                <li>Speaking and book events</li>
                <li>Bulk book orders</li>
              </ul>
            </div>
            <div className={styles.formCard}>
              <ContactForm
                source="books"
                topics={[
                  'General inquiry',
                  'AI governance briefing',
                  'Board or executive advisory',
                  'Speaking or event',
                  'Books and bulk orders',
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
