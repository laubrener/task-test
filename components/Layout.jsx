import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({children}) {
  return (
    <div className={styles.container}>
        <Head>
            <title>Next JS - Task Manager</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav>TODO LIST</nav>
        <main>{children}</main>
    </div>
  )
}
