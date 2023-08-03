<script lang="ts">
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Home',
        value: '/',
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<template>
  <VAppBar
    color="primary"
    density="default"
    flat
    prominent
    sticky
  >
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="text-lg-center">Free Stock Photos</v-toolbar-title>
<!--    <v-btn variant="text" icon="mdi-magnify"></v-btn>-->
  </VAppBar>
  <VNavigationDrawer
    v-model="drawer"
    color="primary"
    location="left"
    temporary
  >

    <VListItem v-for="item in items" :key="item.title" link :to="item.value">
      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VNavigationDrawer>
</template>
