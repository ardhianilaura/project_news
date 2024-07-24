<template>
  <div
    class="bg-gray-900 text-gray-200 py-3.5 px-6 fixed w-full shadow md:flex justify-between items-center"
  >
    <div class="flex items-center cursor-pointer">
      <span class="text-green-500 text-xl mr-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-journal-richtext"
          viewBox="0 0 16 16"
        >
          <path
            d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
          />
          <path
            d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"
          />
          <path
            d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"
          />
        </svg>
      </span>
      <h1 class="text-xl">NEWSTODAY</h1>
    </div>
    <ul class="md:flex md:items-center">
      <li class="md:mx-4">
        <a href="/" class="text-xl hover:text-green-300">Home</a>
      </li>
      <li class="md:mx-4">
        <router-link to="/read-articles" class="text-xl hover:text-green-300"
          >Recently Viewed</router-link
        >
      </li>
      <li class="md:mx-4">
        <input
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          type="text"
          placeholder="Search..."
          class="bg-gray-600 text-gray-200 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none px-4 py-2"
        />

        <button
          @click="handleSearch"
          class="bg-green-500 text-white px-4 py-2 rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg hover:bg-green-600"
        >
          Search
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    async handleSearch() {
      if (!this.searchQuery) return;

      try {
        this.$router.push({
          name: "SearchResults",
          query: { q: this.searchQuery },
        });
      } catch (error) {
        console.error("Error searching for articles:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add any additional styles for the navbar here */
</style>
