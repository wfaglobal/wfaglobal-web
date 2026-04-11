import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HexGrid from '@/components/HexGrid'
import styles from './page.module.css'

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <div className={styles.bodyWrap}>
          <h1 className={styles.heading}>Co-Creating the Future with Global Connectivity</h1>
          <div className={styles.bodyText}>
            <p>Our investment philosophy is anchored in three core pillars—<strong>Wisdom, Foresight, and Action</strong>. These principles guide how we identify, evaluate, and support opportunities across a rapidly evolving global investment landscape.</p>
            <blockquote className={styles.pullQuote}>
              <p>We approach alternative investing with an entrepreneurial mindset, systematically constructing diversified multi-asset strategies that span both public and private capital markets.</p>
            </blockquote>
            <p>In private markets, our investment thesis centers on fostering innovation and original thinking by incubating and supporting visionary early-stage startups shaping the next generation of intelligent systems and technology platforms.</p>
            <blockquote className={styles.pullQuote}>
              <p>Through selective co-investments in frontier technologies and the application of systematic quantitative strategies—including AI, fintech, deeptech, quantum computing, cybersecurity, and the circular economy—we aim to catalyze sustainable growth, build resilience, and generate long-term value across market cycles.</p>
            </blockquote>
          </div>
        </div>
        <HexGrid />
      </main>
      <Footer />
    </div>
  )
}
