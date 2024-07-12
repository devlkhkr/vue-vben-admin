<template>
  <div
    class="antdv-table-vscroll-search-area"
    v-shortkey="['ctrl', 'f']"
    @shortkey="handleShortkey"
  >
    <input type="text" />
    <button type="button">검색</button>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const openSearch = ref(false);
  const handleShortkey = () => {
    openSearch.value = !openSearch.value;
  };
</script>
