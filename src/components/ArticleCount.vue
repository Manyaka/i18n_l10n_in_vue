<template>
  <p :class="$style.p">
    {{ $t('onSite') }} {{ $tc('articles', articleCount) }}
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
