<template>
  <div :class="{ 'loading-page': true, show: loading }">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  background: #000;
  pointer-events: none;
  opacity: 0;
}
.loading-page.show {
  pointer-events: unset;
  opacity: 1;
}
</style>
