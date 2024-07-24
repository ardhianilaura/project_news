<template>
  <div class="p-4 pt-20 px-10 bg-gray-100 min-h-screen">
    <!-- Skeleton Loading -->
    <div v-if="loading" class="skeleton-loader p-4">
      <div class="skeleton-item" v-for="n in 3" :key="n"></div>
    </div>
    <div v-if="article" class="p-4 border rounded-lg shadow-md bg-white">
      <button @click="goBack" class="text-blue-500 hover:underline mb-4">
        &larr; Back
      </button>
      <h1 class="text-4xl font-bold mb-4">{{ article.title }}</h1>
      <img
        :src="article.urlToImage"
        alt="Article Image"
        class="w-full h-96 object-cover mb-4 rounded-lg"
      />
      <p class="mb-4">{{ article.description }}</p>
      <p class="text-sm text-gray-600 mb-2">
        Source: {{ article.source.name }}
      </p>
      <p class="text-sm text-gray-600 mb-2">
        Author: {{ article.author || "Unknown" }}
      </p>
      <p class="text-sm text-gray-600 mb-2">
        Published At: {{ formatDate(article.publishedAt) }}
      </p>
      <a
        :href="article.url"
        target="_blank"
        class="text-blue-500 hover:underline"
        >Read full article</a
      >
    </div>
    <div v-else class="p-4 text-center">Loading...</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleDetail",
  data() {
    return {
      article: null,
    };
  },
  async created() {
    this.fetchArticle();
  },
  methods: {
    async fetchArticle() {
      const articleUrl = this.$route.params.id;
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=apple&from=2024-07-22&to=2024-07-22&sortBy=popularity&apiKey=e370ed8ee91d43448fcded6609768893"
        );
        this.article = response.data.articles.find((a) => a.url === articleUrl);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const dateOptions = {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      };

      // Format date string
      let formattedDate = date.toLocaleDateString("id-ID", dateOptions);

      formattedDate = formattedDate.replace(/(\w+)(,)/, "$1, ");

      if (dateString.includes("T")) {
        const timeOptions = { hour: "2-digit", minute: "2-digit" };
        formattedDate += " " + date.toLocaleTimeString("id-ID", timeOptions);
      }

      return formattedDate;
    },
    goBack() {
      this.$router.back();
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
