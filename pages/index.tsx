import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Title from '../components/index/Title'
import Footer from '../components/Footer'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gabriel - SWE</title>
        <meta name="description" content="Gabriel Ford's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title />
      </main>
      <Footer />
    </div>
  )
}

export default Home
