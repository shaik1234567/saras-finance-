<template>
  <div class="search-results-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SearchResultsList',
};
</script>

<style scoped>
.search-results-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  margin-top: 18px;
}
</style>