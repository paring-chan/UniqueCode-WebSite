<template>
  <div class="shadow-lg">
    <img :src="member.avatar" class="rounded-lg" alt="Avatar" />
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
}
</script>
