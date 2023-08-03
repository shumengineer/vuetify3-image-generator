<template>
  <VApp>
    <Navbar/>
    <!-- router -->
    <VMain class="min-h-screen">
      <router-view></router-view>
    </VMain>
    <VFooter><div class="d-flex flex-row text-sm-body-2 justify-space-between"> 2023 Free stocks Photo. <span class="text-secondary ml-2">W. Shm. Vuetify remember project</span></div></VFooter>
  </VApp>
</template>

<script lang="ts" setup>
import Navbar from "@/components/Navbar.vue";
</script>
