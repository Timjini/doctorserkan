import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'
import 'dotenv/config'



export default function Document() {

  return (
    <Html lang="en">
      <Head>

      </Head>
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
