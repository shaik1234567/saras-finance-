<template>
  <div class="search-bar">
    <label for="search-input" class="visually-hidden">Search</label>
    <input
      id="search-input"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Search for frameworks, libraries..."
      autocomplete="off"
      class="modern-input"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.search-bar {
  width: 100%;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.modern-input {
  width: 100%;
  padding: 14px 18px;
  font-size: 1.1rem;
  border: none;
  border-radius: 16px;
  background: #f3f6fb;
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.07);
  transition: box-shadow 0.2s, background 0.2s;
  outline: none;
  color: #2d3748;
  font-weight: 500;
}
.modern-input:focus {
  background: #e0e7ff;
  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.13);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>