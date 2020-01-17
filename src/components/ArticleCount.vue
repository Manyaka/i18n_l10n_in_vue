<i18n>
{
  "ru": {
    "onSite": "На сайте",
    "articles": "статья | статьи | статей"
  },
  "en": {
    "onSite": "On site",
    "articles": "article | articles"
  }
}
</i18n>

<template>
  <!--<p :clas s="$style.p">На сайте 2 статьи</p>-->
  <p :class="$style.p">
    {{ $t('onSite') }} {{ articleCount }} {{ $tc('articles', articleCount) }}
  </p>
</template>

<script>
export default {
  name: 'ArticleCount',
  props: {
    articleCount: {
      type: Number,
      default: 0
    }
  },
  created() {
    this.$i18n.locale = 'ru';
  }
};
</script>

<style module>
.p {
  font-size: 1em;
}

@media screen and (min-width: 768px) {
  .p {
    font-size: 1.5em;
  }
}
</style>
