import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import ReactFullpage from '@fullpage/react-fullpage'
import LayoutHeader from '../components/Layout/LayoutHeader'

const Home: React.FC = () => {
  return (
    <Layout noSpacing noHeader>
      <LayoutHeader fullpage />
      <ReactFullpage
        licenseKey="7A6BD9E1-8D334350-80A4BC34-64E1097D"
        anchors={['sec1', 'sec2', 'sec3']}
        render={({ fullpageApi }) => {
          return (
            <div>
              <div className="section">SECTION</div>
              <div className="section">SECTION</div>
              <div className="section">SECTION</div>
            </div>
          )
        }}
      />
    </Layout>
  )
}

export default Home
