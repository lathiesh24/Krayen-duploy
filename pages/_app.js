import '../styles/globals.css'

import 'react-notion-x/src/styles.css'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
        <script src="https://www.youtube.com/iframe_api"></script>
      </Head>
    <Component {...pageProps} />
    </>
  )
  
}

export default MyApp
