<template>
  <div class="App">
    <SiteHeader />
    <SomeArticle />
  </div>
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
.App {
  visibility: visible;
}
</style>
