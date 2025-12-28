<template>
  <div id="app" class="main-bg">
    <div class="search-container">
      <h1 class="app-title">🔍 Smart Search Tool</h1>
      <search-bar v-model="searchQuery" />
      <spinner-loader v-if="isLoading" />
      <transition name="fade" mode="out-in">
        <div>
          <search-results-list v-if="!isLoading && searchResults.length">
            <search-result-item
              v-for="result in searchResults"
              :key="result.id"
              :title="result.title"
              :snippet="result.snippet"
              :details="result.details"
            />
          </search-results-list>
          <div v-else-if="!isLoading && !searchResults.length && searchQuery" class="empty-state">
            <p>No results found for "{{ searchQuery }}"</p>
          </div>
          <div v-else-if="!isLoading && !searchQuery" class="empty-state">
            <p>Type to begin searching</p>
          </div>
          <div v-if="error" class="error-state">
            <p>{{ error }}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import SearchResultsList from './components/SearchResultsList.vue';
import SearchResultItem from './components/SearchResultsItem.vue';
import SpinnerLoader from './components/SpinnerLoader.vue';
import { search } from './api/dummyApi';
import { debounce } from 'lodash';

export default {
  name: 'App',
  components: {
    SearchBar,
    SearchResultsList,
    SearchResultItem,
    SpinnerLoader,
  },
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      isLoading: false,
      error: '',
    };
  },
  watch: {
    searchQuery: {
      handler: null,
      immediate: false,
    },
  },
  methods: {
    async performSearch() {
      this.isLoading = true;
      this.error = null;
      try {
        this.searchResults = await search(this.searchQuery);
      } catch (error) {
        this.error = 'Sorry, something went wrong. Please try again.';
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.debouncedSearch = debounce(this.performSearch, 500);
    this.$watch('searchQuery', this.debouncedSearch);
  },
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  background: #f3f6fb;
}

#app.main-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #e0e7ff 0%, #f3f6fb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-container {
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  border-radius: 24px;
  padding: 40px 32px 32px 32px;
  max-width: 480px;
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #3b3b5c;
  margin-bottom: 28px;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 8px rgba(60, 60, 120, 0.07);
}

.empty-state {
  color: #a0aec0;
  margin-top: 36px;
  font-size: 1.1rem;
  text-align: center;
}

.error-state {
  color: #e74c3c;
  margin-top: 36px;
  font-size: 1.1rem;
  text-align: center;
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