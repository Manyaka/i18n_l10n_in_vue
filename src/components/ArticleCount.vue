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
  },
  created() {
    this.getT9n(this.$i18n.locale);
  },
  methods: {
    getT9n(locale) {
      import(`@/locales/components/${this.$options._componentTag}.${locale}.json`)
        .then((msgs) => {
          this.$i18n.setLocaleMessage(locale, msgs);
          this.$i18n.locale = locale;
        })
        .catch((err) => {
          console.err(err.message);
        });
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
