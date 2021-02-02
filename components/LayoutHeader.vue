<template>
  <div class="border-b h-14 fixed top-0 left-0 w-full bg-white z-50">
    <div class="flex pl-4" style="align-items: center">
      <nuxt-link to="/"
        ><div class="text-xl">
          <img alt="logo" class="inline w-6" src="~/assets/images/logo.png" />
          UniqueCode
        </div></nuxt-link
      >
      <div class="flex-grow" />
      <div class="flex">
        <menu-item to="/members">MEMBERS</menu-item>
        <menu-item to="/recruit">RECRUIT</menu-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
