<template>
  <div>
    <content-spacer>
      <div class="text-2xl font-bold">MEMBERS</div>
      <div class="text-gray-600">UniqueCode 멤버들이에요!</div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2"
      >
        <MemberCard
          v-for="member in members"
          :key="member.id"
          :member="member"
        />
      </div>
    </content-spacer>
  </div>
</template>

<script>
export default {
  data: () => ({
    members: [
      {
        avatar:
          'https://cdn.discordapp.com/avatars/299895531701010442/352a021b71062329b93f919d9c5bca35.png?size=1024',
        id: '299895531701010442',
        name: 'STORM',
      },
      {
        id: '628595345798201355',
        name: '파랑이',
        avatar:
          'https://cdn.discordapp.com/avatars/628595345798201355/de2e052c9b74610a18bdf727aba55806.png?size=1024',
      },
    ],
  }),
}
</script>
