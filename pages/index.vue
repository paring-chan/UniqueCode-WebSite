<template>
  <div>
    <client-only>
      <full-page ref="page" :options="options">
        <div class="section">
          <div class="text-3xl font-bold">UniqueCode</div>
          <div class="text-2xl">세상을 바꾸는 청소년 팀.</div>
          <button
            @click="$refs.page.api.moveSectionDown()"
            class="p-2 bg-white hover:bg-black border hover:text-white text-black transition-colors border-black"
          >
            더 알아보기
          </button>
        </div>
        <div class="section">SECTION 2</div>
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
    },
  }),
})
</script>
