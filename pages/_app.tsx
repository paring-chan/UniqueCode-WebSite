import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>UniqueCode</title>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
