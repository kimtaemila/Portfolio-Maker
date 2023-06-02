import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/PageStyles/Home.module.css'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Generator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header>
          <NavBar />
          
        </header>
        <section>

        </section>
      </main>
    </>
  )
}
