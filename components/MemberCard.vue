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
        'z-50 fixed bg-white w-full h-full overlay flex md:flex-row flex-col-reverse': true,
        active: open,
      }"
      @click="open = false"
    >
      <div
        :style="{
          backgroundImage: `url(${member.avatar})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
        class="md:w-1/3 h-1/3 md:h-auto"
      />
      <div class="h-2/3 w-full md:h-auto md:w-2/3 p-6">
        <div class="text-2xl font-bold">{{ member.name }}</div>
      </div>
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
  left: 0 !important;
  pointer-events: unset !important;
  visibility: visible !important;
}
.overlay {
  left: -100vw;
  top: 0;
  pointer-events: none;
  transition-timing-function: ease-in-out;
  transition-duration: 0.25s;
  visibility: hidden;
  transition-property: left, visibility;
}
</style>
