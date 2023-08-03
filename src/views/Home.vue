<template>
  <v-container class="h-screen">
    <v-sheet
      class="d-flex align-center justify-center flex-wrap text-center mx-auto my-12"
      elevation="4"
      height="250"
      rounded
      width="100%"
    >
      <VRow align="center" dense align-content="center">
        <VCol>
          <VImg
            aspect-ratio="16/9"
            height="250"
            cover
            src="https://unsplash.com/photos/LWH2d4gDjGE/download?ixid=M3wxMjA3fDB8MXxhbGx8MTh8fHx8fHwyfHwxNjkxMDY5NDQ3fA&force=true&w=1920"
          ></VImg>
        </VCol>
        <VCol>
          <div>
            <h2 class="text-h5 font-weight-black text-secondary mb-4">Free Stocks!</h2>

            <div class="text-h6 font-weight-medium mb-2">
              Let`s find something beautiful
            </div>
          </div>
        </VCol>
      </VRow>
    </v-sheet>
    <Searchbar/>
    <v-row justify="center" align="center" class="mt-8 mb-12">
      <v-col cols="auto">
        <v-btn density="compact" @click="this.$router.push({path: `/stocks/duck`})">Ducks</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn density="compact" @click="this.$router.push({path: `/stocks/bird`})">Birds</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn density="compact" @click="this.$router.push({path: `/stocks/nature`})">Nature</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import Searchbar from "@/components/Searchbar.vue";
</script>
