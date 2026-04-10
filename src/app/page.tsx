import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HexGrid from '@/components/HexGrid'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.bodyWrap}>
          <h1 className={styles.heading}>Co-Creating the Future with Global Connectivity</h1>
          <div className={styles.bodyText}>
            <p>Our investment philosophy is anchored in three core pillars—<strong>Wisdom, Foresight, and Action</strong>. These principles guide how we identify, evaluate, and support opportunities across a rapidly evolving global investment landscape.</p>
            <p>We approach alternative investing with an entrepreneurial mindset, systematically constructing diversified <strong>multi-asset strategies</strong> that span both <strong>public</strong> and <strong>private</strong> capital markets.</p>
            <p>In private markets, our investment thesis centers on fostering innovation and original thinking by incubating and supporting visionary early-stage startups shaping the next generation of intelligent systems and technology platforms.</p>
            <p>Through selective co-investments in frontier technologies and the application of systematic quantitative strategies—including AI, fintech, deeptech, quantum computing, cybersecurity, and the circular economy—we aim to catalyze sustainable growth, build resilience, and generate long-term value across market cycles.</p>
          </div>
        </div>
        <HexGrid />
      </main>
      <Footer />
    </>
  )
}
