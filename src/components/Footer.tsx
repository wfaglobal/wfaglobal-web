import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.fl}>
          <Image src="/logo.png" alt="WFA Global" width={32} height={32} />
          <span>WFA Global Investments</span>
        </div>
        <div className={styles.fd}>
          The content provided on this website is for informational purposes only and does not constitute investment advice, a solicitation, or a recommendation to buy or sell any securities. © {year} WFA Global®
        </div>
        <div className={styles.fr}>WFA Global Investments</div>
      </div>
    </footer>
  )
}
