import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <div className={styles.bodyWrap}>
          <h1 className={styles.heading}>Contact</h1>
          <div className={styles.contactGrid}>
            <ContactForm />
            <div className={styles.info}>
              <div className={styles.ci}>
                <h4>New York</h4>
                <p>100 Park Avenue<br />New York, NY 10017</p>
              </div>
              <div className={styles.ci}>
                <h4>Connecticut</h4>
                <p>15 River Road<br />Wilton, CT 06897</p>
              </div>
              <div className={styles.ci}>
                <h4>Email</h4>
                <p><a href="mailto:contact@wfaglobal.com">contact@wfaglobal.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
