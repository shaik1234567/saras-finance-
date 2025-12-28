<template>
  <div class="loader">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'SpinnerLoader',
};
</script>

<style scoped>
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
  }

  .spinner {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 5px solid #e0e7ff;
    border-top: 5px solid #6366f1;
    border-right: 5px solid #7f9cf5;
    border-bottom: 5px solid #a5b4fc;
    border-left: 5px solid #e0e7ff;
    background: transparent;
    animation: spin 0.8s linear infinite;
    box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.07);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>