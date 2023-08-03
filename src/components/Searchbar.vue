<script lang="ts">
export default {
  data: () => ({
    loaded: false,
    loading: false,
    searchBarField: "",
  }),
  methods: {
    onEnter() {
      if (this.searchBarField?.length < 2) return false;
      this.loading = true

      this.$router.push({path: `/stocks/${this.searchBarField}`});
    },
    onChange(e: any) {
      const changed = e.target.value;
      this.searchBarField = changed;
    }
  },
}

</script>

<template>
  <v-text-field
    :loading="loading"
    :value="searchBarField"
    @input="onChange"
    @change="onEnter"
    density="comfortable"
    variant="outlined"
    label="Search pictures"
    append-inner-icon="mdi-magnify"
    single-line
    hide-details
    @click:append-inner="onEnter"
  ></v-text-field>
</template>
