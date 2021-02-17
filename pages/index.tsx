import React from 'react'
import Layout from '../components/Layout'
import ReactFullpage from '@fullpage/react-fullpage'
import LayoutHeader from '../components/Layout/LayoutHeader'
import Button from '../components/Button'

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
                  className="container px-8 flex mx-auto h-full flex-col gap-2"
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <div className="text-4xl font-bold">UniqueCode</div>
                  <div className="text-xl">세상을 바꾸는 청소년 팀</div>
                  <Button onClick={() => fullpageApi.moveSectionDown()}>
                    더보기
                  </Button>
                </div>
              </div>
              <div className="section">
                <div
                  className="container px-8 flex mx-auto h-full flex-col gap-2"
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <div className="text-3xl font-bold">TEST</div>
                </div>
              </div>
              <div className="section">
                <div
                  className="container px-8 flex mx-auto h-full flex-col gap-2"
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <div className="text-3xl font-bold">팀원 신청</div>
                  <div className="text-xl">설명설명</div>
                  <Button>대충 신청 버튼</Button>
                </div>
              </div>
            </div>
          )
        }}
      />
    </Layout>
  )
}

export default Home
