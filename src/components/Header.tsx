'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logoBlock}>
          <Image src="/logo.png" alt="WFA Global" width={90} height={90} className={styles.logoImg} priority />
          <div className={styles.logoName}>WFA GLOBAL INVESTMENTS</div>
        </Link>

        {/* Desktop nav */}
        <ul className={styles.navLinks}>
          <li><Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link></li>
          <li><Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact</Link></li>
        </ul>

        {/* Mobile hamburger */}
        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`${styles.bar} ${open ? styles.bar1open : ''}`}></span>
          <span className={`${styles.bar} ${open ? styles.bar2open : ''}`}></span>
          <span className={`${styles.bar} ${open ? styles.bar3open : ''}`}></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={pathname === '/' ? styles.mobileActive : styles.mobileLink} onClick={() => setOpen(false)}>Home</Link>
          <Link href="/contact" className={pathname === '/contact' ? styles.mobileActive : styles.mobileLink} onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  )
}
