<template>
  <div class="select-none">
    <div class="border-b h-14 fixed top-0 left-0 w-full z-50">
      <div class="flex pl-4" style="align-items: center">
        <a href="#1"
          ><div class="text-xl">
            <img alt="logo" class="inline w-6" src="~/assets/images/logo.png" />
            UniqueCode
          </div></a
        >
        <div class="flex-grow" />
        <div class="flex">
          <menu-item to="/members">MEMBERS</menu-item>
          <menu-item to="/recruit">RECRUIT</menu-item>
        </div>
      </div>
    </div>
    <client-only>
      <full-page ref="page" :options="options">
        <div>
          <Nuxt />
        </div>
      </full-page>
    </client-only>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: {
      licenseKey: '7A6BD9E1-8D334350-80A4BC34-64E1097D',
      anchors: ['1', '2', '3'],
      scrollOverflow: true,
    },
  }),
}
</script>

<style>
@import url('../assets/css/tailwind.css');
</style>
