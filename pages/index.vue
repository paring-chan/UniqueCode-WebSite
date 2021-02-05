<template>
  <div>
    <client-only>
      <full-page ref="page" :options="options">
        <div ref="sec1" class="section">
          <div class="container mx-auto px-4">
            <div class="text-3xl font-bold">UniqueCode</div>
            <div class="text-2xl">세상을 바꾸는 청소년 팀.</div>
            <button
              class="p-2 w-36 rounded-md bg-white hover:bg-black border hover:text-white text-black transition-colors border-black"
              @click="$refs.page.api.moveSectionDown()"
            >
              더 알아보기
            </button>
          </div>
        </div>
        <div class="section">
          <div class="container mx-auto px-4">
            <div class="text-4xl font-bold">PROJECTS</div>
            <div class="text-lg">UniqueCode에서 진행하는 프로젝트들이에요!</div>
            <div class="bg-black w-full h-1 mb-2" />
            <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2">
              <ProjectCard
                :image="require('../assets/images/strawberrydonut.png')"
                to="/projects/strawberrydonut"
                title="딸기도넛"
                description="나만의 스토리를 만들다"
              />
              <ProjectCard
                :image="require('../assets/images/minibot.png')"
                to="/projects/minibot"
                title="미니봇"
                description="망한잡봇"
              />
              <ProjectCard
                :image="require('../assets/images/olivetoast.png')"
                to="/projects/olivetoast"
                title="올리브토스트"
                description="올리브토스트는 디스코드 사용을 편리하게 만들어주는 봇입니다!"
              />
              <ProjectCard
                :image="require('../assets/images/uniquebots.png')"
                to="/projects/uniquebots"
                title="UniqueBots"
                description="디스코드 봇 리스트에요!"
              />
              <ProjectCard
                :image="require('../assets/images/freeai.png')"
                to="/projects/freeai"
                title="FreeAI"
                description="설명설명"
              />
            </div>
          </div>
        </div>
        <div class="section fp-auto-height">
          <Footer />
        </div>
      </full-page>
    </client-only>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'main',
  data: () => ({
    options: {
      licenseKey: '7A6BD9E1-8D334350-80A4BC34-64E1097D',
      anchors: ['1', '2', '3'],
      scrollOverflow: true,
    },
  }),
})
</script>
