import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const Home = () => {
  return (
    <Layout>
      <div className="mt-16 justify-center flex flex-col">
        <div className="text-4xl font-bold text-center">StrawberryDonut</div>
        <div className="text-center text-xl">이젠 소설을 디스코드 에서.</div>
        <div className="flex justify-center gap-4">
          <Link href="/projects/sbdonut">
            <a
              href="/projects/sbdonut"
              className="text-blue-500 hover:text-blue-600 text-xl">
              더 알아보기 {'>'}
            </a>
          </Link>
          <a
            href="https://sbdonut.dev/invite"
            target="_blank"
            className="text-blue-500 hover:text-blue-600 text-xl">
            초대하기 {'>'}
          </a>
        </div>
        <img
          className="w-1/2 mx-auto mt-4"
          src={require('../assets/img/home__img1.png')}
          alt="Image"
        />
      </div>
    </Layout>
  )
}

export default Home
