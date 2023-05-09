import Image from 'next/image'
import { cookies } from 'next/headers'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main id={styles.mainPage}>
      <div className={styles.headerContainer}>
        <h1>Your Final Frontier</h1>
        <nav id={styles.toolNavigator}>
            <span id={styles.userHeader}>
              <Link href="/network/profile">Account</Link> | <Link href="/dashboard/factions">Factions</Link> | <Link href="https://discord.gg/ThzRbzafR4">Support Server</Link>
            </span>
        </nav>
        <nav id={styles.navigator}>
          <Link href="dashboard">Dashboard</Link> | <Link href="network">Network</Link> | <Link href="login" className={styles.buttonLink}>Login</Link>
        </nav>
      </div>
      {/**Header ^ */}
      
    </main>
  )
}
