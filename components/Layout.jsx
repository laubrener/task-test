import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({children}) {
  return (
    <div className={styles.container}>
        <Head>
            <title>Next JS - Task Manager</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className={styles.navbar}>
          <h3 className={styles.navText}>TODO LIST</h3>
        </nav>
        <main>{children}</main>
    </div>
  )
}
