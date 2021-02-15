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
              <div className="section">
                <div
                  className="container px-8 flex mx-auto h-full flex-col"
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <div className="text-4xl font-bold">UniqueCode</div>
                  <div className="text-xl">세상을 바꾸는 청소년 팀</div>
                  <a className="py-2 px-4 border border-black cursor-pointer">
                    더보기
                  </a>
                </div>
              </div>
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
