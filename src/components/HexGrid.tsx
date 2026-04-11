'use client'
import styles from './HexGrid.module.css'

const sectors = [
  { label: 'Artificial Intelligence', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80&fit=crop' },
  { label: 'Quantum Computing',       img: 'https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=400&q=80&fit=crop' },
  { label: 'Fintech',                 img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80&fit=crop' },
  { label: 'Deeptech',                img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&fit=crop' },
  { label: 'Real Estate Tech',        img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80&fit=crop' },
  { label: 'Trading & Blockchain',    img: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&q=80&fit=crop' },
  { label: 'Clean Technology',        img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80&fit=crop' },
  { label: 'Cybersecurity',           img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80&fit=crop' },
  { label: 'Private Markets',         img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80&fit=crop' },
  { label: 'Circular Economy',        img: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400&q=80&fit=crop' },
]

const W = 24.25, SX = 25.25, SY = 26.81, OX = SX / 2

const positions = [
  [0*SX, 0], [1*SX, 0], [2*SX, 0], [3*SX, 0],
  [OX+0*SX, SY], [OX+1*SX, SY], [OX+2*SX, SY],
  [OX+0*SX, SY*2], [OX+1*SX, SY*2], [OX+2*SX, SY*2],
]

export default function HexGrid() {
  return (
    <section className={styles.hexSection}>
      <p className={styles.eyebrow}>Investment focus</p>
      <div className={`${styles.grid} ${styles.desktopGrid}`}>
        <div className={styles.container}>
          {sectors.map((s, i) => (
            <div key={s.label} className={styles.hc} style={{ left: `${positions[i][0].toFixed(3)}%`, top: `${positions[i][1].toFixed(3)}%` }}>
              <div className={styles.hi} style={{ backgroundImage: `url(${s.img})` }}>
                <div className={styles.ho}><span className={styles.hl}>{s.label}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.grid} ${styles.mobileGrid}`}>
        {sectors.map((s) => (
          <div key={s.label} className={styles.mobileHc}>
            <div className={styles.hi} style={{ backgroundImage: `url(${s.img})` }}>
              <div className={styles.ho}><span className={styles.hl}>{s.label}</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
