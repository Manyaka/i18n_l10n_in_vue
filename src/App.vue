<template>
  <main :class="$style.main">
    <SiteHeader />
    <ArticleCount :article-count="articleCount" />
    <SomeArticle v-for="article in articles" :key="article.id" :article="article" />
  </main>
</template>

<script>
import ArticleCount from '@/components/ArticleCount';
import SiteHeader from './components/SiteHeader';
import SomeArticle from './components/SomeArticle.vue';

import articles from '@/data/articles';

export default {
  name: 'App',
  components: {
    ArticleCount,
    SiteHeader,
    SomeArticle
  },
  data() {
    return {
      articles: articles
    };
  },
  computed: {
    articleCount() {
      return this.articles.length;
    }
  }
};
</script>

<style module>
.main {
  max-width: 800px;
  margin: 30px auto;
}
</style>
