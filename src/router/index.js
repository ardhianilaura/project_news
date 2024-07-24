import { createRouter, createWebHistory } from 'vue-router';
import News from '../components/News.vue';
import ArticleDetail from '../components/ArticleDetail.vue';
import SearchResults from '../components/SearchResults.vue';
import ReadArticles from '../components/ReadArticles.vue';

const routes = [
  { path: '/', component: News },
  { path: '/article/:id', name: 'ArticleDetail', component: ArticleDetail },
  { path: '/search', name: 'SearchResults', component: SearchResults },
  { path: '/read-articles', name: 'ReadArticles', component: ReadArticles },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
