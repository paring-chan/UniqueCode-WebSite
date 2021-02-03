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
            <div class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
              <ProjectCard
                :image="require('../assets/images/strawberrydonut.png')"
                to="/projects/strawberry_donut"
                title="딸기도넛"
                description="대충 스토리 봇이에여"
              /><ProjectCard
                :image="require('../assets/images/strawberrydonut.png')"
                to="/projects/strawberry_donut"
                title="딸기도넛"
                description="대충 스토리 봇이에여"
              /><ProjectCard
                :image="require('../assets/images/strawberrydonut.png')"
                to="/projects/strawberry_donut"
                title="딸기도넛"
                description="대충 스토리 봇이에여"
              /><ProjectCard
                :image="require('../assets/images/strawberrydonut.png')"
                to="/projects/strawberry_donut"
                title="딸기도넛"
                description="대충 스토리 봇이에여"
              /><ProjectCard
                :image="require('../assets/images/strawberrydonut.png')"
                to="/projects/strawberry_donut"
                title="딸기도넛"
                description="대충 스토리 봇이에여"
              />
            </div>
          </div>
        </div>
        <div class="section">SECTION 3</div>
      </full-page>
    </client-only>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    options: {
      licenseKey: '7A6BD9E1-8D334350-80A4BC34-64E1097D',
      anchors: ['1', '2', '3'],
    },
  }),
})
</script>
