<template>
  <div class="border-b h-14 fixed top-0 left-0 w-full bg-white z-50">
    <div class="flex container h-full mx-auto" style="align-items: center">
      <nuxt-link to="/"
        ><div class="text-xl pl-4 sm:pl-0">UniqueCode</div></nuxt-link
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
