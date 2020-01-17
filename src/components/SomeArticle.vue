<template>
  <div class="SomeArticle">
    <h2 :class="$style.title">{{ title }}</h2>
    <p :class="$style.date">{{ article.date }}</p>
    <p :class="$style.body">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: 'SomeArticle',
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    title() {
      return this.article[`title_${this.$i18n.locale}`];
    },
    body() {
      return this.article[`body_${this.$i18n.locale}`];
    }
  }
};
</script>

<style>
.SomeArticle {
  background-color: #eaa1ad26;
  border: 1px solid #e6626229;
  border-radius: 5px;
  padding: 1em;
}

.SomeArticle:not(:last-child) {
  margin-bottom: 1em;
}

.SomeArticle p {
  margin-top: 0;
}

.SomeArticle p:last-child {
  margin-bottom: 0;
}
</style>
<style module>
.title {
  margin-top: 0;
}

.date {
  color: grey;
}

.body {
  font-size: 1em;
  line-height: 1.3;
}

@media screen and (min-width: 768px) {
  .body {
    font-size: 1.2em;
  }
}
</style>
