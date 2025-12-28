<template>
  <button class="search-result-item" @click="toggleExpand">
    <h3 class="title">{{ title }}</h3>
    <p class="snippet">{{ snippet }}</p>
    <transition name="fade">
      <div v-if="isExpanded" class="details">
        <p>{{ details }}</p>
      </div>
    </transition>
  </button>
  <button class="search-result-item" @click="toggleExpand">
    <div class="item-content">
      <h3 class="title">{{ title }}</h3>
      <p class="snippet">{{ snippet }}</p>
    </div>
    <transition name="expand">
      <div v-if="isExpanded" class="details">
        <p>{{ details }}</p>
      </div>
    </transition>
    <span class="expand-icon" :class="{ expanded: isExpanded }">▼</span>
  </button>
</template>

<script>
export default {
  name: 'SearchResultItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
.search-result-item {
  background: none;
  border: 1px solid #eee;
  border-radius: 5px;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 15px;
  text-align: left;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
   appearance: none;
}

.search-result-item:hover {
  background-color: #f9f9f9;
}

.title {
  margin: 0;
  font-size: 18px;
}

.snippet {
  margin: 10px 0 0;
  font-size: 14px;
  color: #555;
}

.search-result-item {
  background: #f8faff;
  border: none;
  border-radius: 18px;
  box-shadow: 0 2px 12px 0 rgba(31, 38, 135, 0.07);
  padding: 22px 24px 18px 24px;
  text-align: left;
  cursor: pointer;
  transition: box-shadow 0.22s, background 0.18s;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.search-result-item:hover {
  background: #e0e7ff;
  box-shadow: 0 6px 24px 0 rgba(31, 38, 135, 0.13);
}
.item-content {
  width: 100%;
}
.title {
  margin: 0 0 6px 0;
  font-size: 1.22rem;
  font-weight: 800;
  color: #3b3b5c;
  letter-spacing: 0.1px;
}
.snippet {
  margin: 0;
  color: #5a5a7a;
  font-size: 1.04rem;
  font-weight: 500;
}
.details {
  margin-top: 16px;
  color: #444;
  font-size: 1.01rem;
  background: #e0e7ff;
  border-radius: 12px;
  padding: 16px 18px;
  box-shadow: 0 1px 4px 0 rgba(31, 38, 135, 0.07);
  animation: fadeIn 0.3s;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
.expand-icon {
  position: absolute;
  right: 18px;
  top: 22px;
  font-size: 1.1rem;
  color: #a0aec0;
  transition: transform 0.25s;
}
.expand-icon.expanded {
  transform: rotate(180deg);
  color: #3b3b5c;
}
/* Smooth expand transition */
.expand-enter-active, .expand-leave-active {
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to, .expand-leave-from {
  max-height: 200px;
  opacity: 1;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>