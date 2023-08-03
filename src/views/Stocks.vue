<script lang="ts">
// import {getPictures} from "@/api/pictures";

export default {
  data() {
    return {
      // loading: false,
      // picture: null,
      // error: null,
      loadUrl: "",
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    // this.$watch(
    //   () => this.$route.params,
    //   () => {
    //     this.fetchData()
    //   },
    //   // fetch the data when the view is created and the data is
    //   // already being observed
    //   {immediate: true}
    // )
    this.loadUrl = `https://loremflickr.com/840/840/${this.$route?.params?.search?.toLowerCase().trim()}`;
  },
}
</script>

<template>
  <VContainer class="pa-lg-12">

    <VContainer class="mt-12">
      <span class="text-secondary mb-0">Picture by search</span>
      <h1 class="text-xl-body-1 mt-0">{{ this.$route?.params?.search }}</h1>
    </VContainer>
    <VContainer class="w-full mb-12">
      <VImg
        v-if="this.loadUrl"
        aspect-ratio="16/9"
        height="540"
        cover
        :src="this.loadUrl"
      ></VImg>
      <div class="mt-12">
        <VBtn block rounded="0" size="x-large" color="green" @click="this.$router.go()">Generate new</VBtn>
        <VBtn block rounded="0" size="x-large" color="secondary" class="mt-4" @click="this.$router.push({path: '/'})">Return back</VBtn>
      </div>
    </VContainer>

  </VContainer>
</template>

<style scoped>

</style>
