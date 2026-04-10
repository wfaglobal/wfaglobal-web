'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className={styles.header}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logoBlock}>
          <Image src="/logo.png" alt="WFA Global" width={90} height={90} className={styles.logoImg} priority />
          <div className={styles.logoName}>WFA GLOBAL INVESTMENTS</div>
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link></li>
          <li><Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}
