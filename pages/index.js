import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Agile Project</title>
        <meta name="description" content="Welcome to My Next.js Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Next.js Site</h1>
        <p>This is some more content on my page!</p>
      </main>

      <footer>
        <p>This is the footer of my webpage.</p>
      </footer>
    </div>
  )
}
