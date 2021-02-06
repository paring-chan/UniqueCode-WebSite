<template>
  <div>
    <div class="shadow-lg">
      <img :src="member.avatar" class="rounded-lg" alt="Avatar" />
    </div>
    <!--    <div class="z-50 fixed bg-black w-full h-full top-0 left-0">test</div>-->
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
