<template>
  <main :class="$style.main">
    <SiteHeader />
    <SomeArticle />
  </main>
</template>

<script>
import SiteHeader from './components/SiteHeader';
import SomeArticle from './components/SomeArticle.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    SomeArticle
  },
  data () {
    return {};
  }
};
</script>

<style module>
.main {
  max-width: 800px;
  margin: 30px auto;
}
</style>
