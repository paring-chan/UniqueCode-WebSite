import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ userSelect: 'none' }}>
      <title>UniqueCode</title>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
