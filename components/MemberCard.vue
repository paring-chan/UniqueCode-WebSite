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
        class="md:w-1/3 md:h-auto flex-grow"
      />
      <div class="w-full md:h-auto md:w-2/3 p-6">
        <div class="text-4xl font-bold">{{ member.name }}</div>
        <div class="flex space-x-2">
          <div>
            <a :href="`https://discord.com/users/${member.id}`" target="_blank">
              <FontAwesomeIcon :icon="['fab', 'discord']" class="text-xl" />
            </a>
          </div>
          <div v-if="member.links" class="flex space-x-2">
            <a
              v-for="[r, i] in member.links.map((x, y) => [x, y])"
              :key="i"
              :href="r.link"
              target="_blank"
            >
              <FontAwesomeIcon :icon="r.icon" class="text-xl" />
            </a>
          </div>
        </div>
        <div class="text-2xl">{{ member.description }}</div>
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
