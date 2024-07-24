<template>
  <div class="p-4 pt-20 px-10 bg-gray-100 min-h-screen">
    <!-- Skeleton Loading -->
    <div v-if="loading" class="skeleton-loader p-4">
      <div class="skeleton-item" v-for="n in 3" :key="n"></div>
    </div>
    <div
      v-if="articles.length"
      class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="article in articles"
        :key="article.url"
        class="p-4 border rounded-lg shadow-md bg-white"
      >
        <h2 class="text-2xl font-bold mb-2">{{ article.title }}</h2>
        <img
          :src="article.urlToImage"
          alt="Article Image"
          class="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <p class="mb-4">{{ article.description }}</p>
        <a
          :href="article.url"
          target="_blank"
          class="text-blue-500 hover:underline"
          >Read full article</a
        >
      </div>
    </div>
    <!-- <div v-else class="text-center">No results found</div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchResults",
  data() {
    return {
      articles: [],
    };
  },
  created() {
    const query = this.$route.query.q;
    if (query) {
      this.fetchArticles(query);
    }
  },
  methods: {
    async fetchArticles(query) {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${encodeURIComponent(
            query
          )}&from=2024-07-22&to=2024-07-22&sortBy=popularity&apiKey=e370ed8ee91d43448fcded6609768893`
        );
        this.articles = response.data.articles;
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    },
  },
};
</script>

<style scoped>
.skeleton-loader {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skeleton-item {
  background: #e0e0e0;
  height: 100px;
  border-radius: 4px;
}
</style>
