<template>
  <div
    ref="cursor"
    class="cursor rounded-full bg-black w-6 h-6 fixed -top-3 -left-3 pointer-events-none"
    style="z-index: 99999"
  ></div>
</template>

<script>
import GSAP from 'gsap'

export default {
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('mousemove', this.update.bind(this))
    })
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.update.bind(this))
  },
  methods: {
    update(event) {
      GSAP.to(this.$refs.cursor, {
        x: event.pageX,
        y: event.pageY,
      })
    },
  },
}
</script>
