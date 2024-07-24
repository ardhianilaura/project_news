<template>
    <div class="p-4 px-10">
      <h2 class="text-2xl font-bold mb-4">Read Articles</h2>
      <div v-if="savedArticles.length === 0" class="text-center text-gray-600">
        No articles read yet.
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="article in savedArticles"
          :key="article.url"
          class="p-4 border rounded-lg shadow-md bg-white flex flex-col justify-between"
        >
          <img
            :src="article.urlToImage || '/path/to/placeholder-image.jpg'"
            alt="Article Image"
            class="w-full h-48 object-cover mb-4 rounded-lg"
          />
          <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
          <a :href="article.url" target="_blank" class="text-blue-500 hover:underline">
            Read full article
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ReadArticles",
    data() {
      return {
        savedArticles: []
      };
    },
    created() {
      this.savedArticles = this.getSavedArticles();
    },
    methods: {
      getSavedArticles() {
        return JSON.parse(localStorage.getItem('readArticles')) || [];
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add styles for ReadArticles component here */
  </style>
  