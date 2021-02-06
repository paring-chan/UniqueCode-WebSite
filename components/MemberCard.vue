<template>
  <div>
    <div class="shadow-lg" @click="open = true">
      <img
        :src="member.avatar"
        class="rounded-lg pointer-events-none"
        alt="Avatar"
      />
    </div>
    <div
      :class="{
        'z-50 fixed bg-black w-full h-full overlay': true,
        active: open,
      }"
      @click="open = false"
    >
      test
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberCard',
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    open: false,
  }),
}
</script>

<style scoped>
.active {
  top: 0 !important;
  opacity: 1 !important;
  pointer-events: unset !important;
}
.overlay {
  left: 0;
  top: 100vh;
  opacity: 0;
  pointer-events: none;
  transition: all 0.25s ease-in-out;
}
</style>
