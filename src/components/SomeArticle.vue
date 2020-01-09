<template>
  <div class="SomeArticle">
    <h2 class="title">{{ articleTitle }}</h2>
    <p class="date">{{ articleDate }}</p>
    <p class="body">{{ articleBody }}</p>
  </div>
</template>

<script>
export default {
  name: 'SomeArticle',
  props: {
    articleTitle: {
      type: String,
      default: 'articleTitle'
    },
    articleDate: {
      type: String,
      default: 'articleDate'
    },
    articleBody: {
      type: String,
      default: 'articleBody'
    }
  }
};
</script>

<style module>
.SomeArticle {
  visibility: visible;
}
</style>
