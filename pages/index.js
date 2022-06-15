import Head from 'next/head'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'

export default function Home() {

  const handleOnBtnClick = () => {
    console.log("hi btn click handle");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Search</title>
        <meta name="description" content="Looking for a coffee nearby you?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="Find Nearby" handleOnClick={handleOnBtnClick}/>
      </main>
    </div>
  )
}
