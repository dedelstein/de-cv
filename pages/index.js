import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dan Edelstein's CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1> <Link href="/CV.pdf">CV</Link></h1>
      </main>

      <Footer />
    </div>
  )
}