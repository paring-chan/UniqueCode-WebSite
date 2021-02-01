<template>
  <router-link
    :to="to"
    class="border-b hover:border-black transition-colors h-full p-4 cursor-pointer select-none"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>
