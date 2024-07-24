<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <!-- Skeleton Loading -->
    <div v-if="loading" class="skeleton-loader p-4">
      <div class="skeleton-item" v-for="n in 3" :key="n"></div>
    </div>

    <!-- Actual News Content -->
    <div v-else class="p-4 pt-20 px-10">
      <!-- Baris pertama -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <!-- Kolom pertama: Artikel besar -->
        <div
          v-for="article in largeArticles"
          :key="article.url"
          class="col-span-1 md:col-span-2 p-4 border rounded-lg shadow-md bg-white flex flex-col justify-between"
        >
          <div class="flex flex-col items-center justify-center">
            <h2 class="text-5xl font-bold mb-2">{{ article.title }}</h2>
          </div>
          <p class="mb-2">{{ article.description }}</p>
          <p class="text-sm text-gray-600 mb-2">
            Source: {{ article.source.name }}
          </p>
          <p class="text-sm text-gray-600 mb-2">
            Author: {{ article.author || "Unknown" }}
          </p>
          <p class="text-sm text-gray-600 mb-2">
            Published At: {{ formatDate(article.publishedAt) }}
          </p>
          <p
            @click="viewArticle(article)"
            class="text-blue-500 hover:underline cursor-pointer"
          >
            Read more
          </p>
          <img
            :src="article.urlToImage || '/path/to/placeholder-image.jpg'"
            alt="Article Image"
            class="w-full h-full object-cover mt-4 rounded-lg"
          />
        </div>

        <!-- Kolom kedua: Empat artikel kecil -->
        <div class="col-span-1 grid grid-cols-1 gap-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="article in smallArticlesTop"
              :key="article.url"
              class="p-4 border rounded-lg shadow-md bg-white flex flex-col justify-between"
            >
              <img
                :src="article.urlToImage || '/path/to/placeholder-image.jpg'"
                alt="Article Image"
                class="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <div>
                <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
                <p class="mb-2">{{ article.description }}</p>
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
                  @click="viewArticle(article)"
                  class="text-blue-500 hover:underline cursor-pointer"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="article in smallArticlesBottom"
              :key="article.url"
              class="p-4 border rounded-lg shadow-md bg-white flex flex-col justify-between"
            >
              <img
                :src="article.urlToImage || '/path/to/placeholder-image.jpg'"
                alt="Article Image"
                class="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <div>
                <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
                <p class="mb-2">{{ article.description }}</p>
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
                  @click="viewArticle(article)"
                  class="text-blue-500 hover:underline cursor-pointer"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Baris kedua -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Kolom pertama: Empat artikel kecil -->
        <div class="col-span-1 grid grid-cols-1 gap-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="article in smallArticlesRow2Top"
              :key="article.url"
              class="p-4 border rounded-lg shadow-md bg-white flex flex-col justify-between"
            >
              <img
                :src="article.urlToImage || '/path/to/placeholder-image.jpg'"
                alt="Article Image"
                class="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <div>
                <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
                <p class="mb-2">{{ article.description }}</p>
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
                  @click="viewArticle(article)"
                  class="text-blue-500 hover:underline cursor-pointer"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="article in smallArticlesRow2Bottom"
              :key="article.url"
              class="p-4 border rounded-lg shadow-md bg-white flex flex-col justify-between"
            >
              <img
                :src="article.urlToImage || '/path/to/placeholder-image.jpg'"
                alt="Article Image"
                class="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <div>
                <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
                <p class="mb-2">{{ article.description }}</p>
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
                  @click="viewArticle(article)"
                  class="text-blue-500 hover:underline cursor-pointer"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Kolom kedua: Artikel besar -->
        <div
          v-for="article in largeArticleRow2"
          :key="article.url"
          class="col-span-1 md:col-span-2 p-4 border rounded-lg shadow-md bg-white flex flex-col justify-between"
        >
          <div class="flex flex-col items-center justify-center">
            <h2 class="text-5xl font-bold mb-2">{{ article.title }}</h2>
          </div>
          <p class="mb-2">{{ article.description }}</p>
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
            @click="viewArticle(article)"
            class="text-blue-500 hover:underline cursor-pointer"
          >
            Read more
          </a>
          <img
            :src="article.urlToImage || '/path/to/placeholder-image.jpg'"
            alt="Article Image"
            class="w-full h-full object-cover mt-4 rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "News",
  data() {
    return {
      articles: [],
      loading: true,
    };
  },
  computed: {
    largeArticles() {
      return this.articles.slice(0, 1); // Artikel pertama sebagai artikel besar
    },
    smallArticlesTop() {
      return this.articles.slice(1, 3); // Artikel kedua dan ketiga sebagai artikel kecil atas
    },
    smallArticlesBottom() {
      return this.articles.slice(3, 5); // Artikel keempat dan kelima sebagai artikel kecil bawah
    },
    largeArticleRow2() {
      return this.articles.slice(5, 6); // Artikel keenam sebagai artikel besar di baris kedua
    },
    smallArticlesRow2Top() {
      return this.articles.slice(6, 8); // Artikel ketujuh dan kedelapan sebagai artikel kecil atas di baris kedua
    },
    smallArticlesRow2Bottom() {
      return this.articles.slice(8, 10); // Artikel kesembilan dan kesepuluh sebagai artikel kecil bawah di baris kedua
    },
  },
  async created() {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=apple&from=2024-07-22&to=2024-07-22&sortBy=popularity&apiKey=e370ed8ee91d43448fcded6609768893"
      );
      this.articles = response.data.articles;
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      this.loading = false;
    }
  },
  viewArticle(article) {
    this.$router.push({ name: "ArticleDetail", params: { id: article.url } });
  },
  methods: {
    viewArticle(article) {
      // Save the article to local storage
      const readArticles =
        JSON.parse(localStorage.getItem("readArticles")) || [];

      // Check if the article is already saved
      const isArticleSaved = readArticles.some((a) => a.url === article.url);

      if (!isArticleSaved) {
        readArticles.push({
          title: article.title,
          url: article.url,
          urlToImage: article.urlToImage,
        });
        localStorage.setItem("readArticles", JSON.stringify(readArticles));
      }

      // Navigate to article detail
      this.$router.push({ name: "ArticleDetail", params: { id: article.url } });
    },

    // Add method to get saved articles
    getSavedArticles() {
      return JSON.parse(localStorage.getItem("readArticles")) || [];
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
