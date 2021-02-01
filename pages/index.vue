<template>
  <div>
    <client-only>
      <full-page :options="options">
        <div class="section">SECTION 1</div>
        <div class="section">SECTION 2</div>
        <div class="section">SECTION 3</div>
      </full-page>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    options: {
      licenseKey: '7A6BD9E1-8D334350-80A4BC34-64E1097D',
    },
  }),
})
</script>
