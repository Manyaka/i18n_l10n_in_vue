<template>
  <div class="SiteHeader">
    <h1 :class="$style.title">{{ $t('siteTitle') }}</h1>
    <cite :class="$style.cite">{{ $t('siteText') }}</cite>
    <p :class="$style.p">{{ $t('changeLang') }}</p>
    <!--TODO это свой компонент-->
    <div>
      <button
        v-for="locale in languages"
        :key="`lang_${locale.flag}`"
        type="button"
        :class="$style.btn"
        @click="btnLangClickHandler(locale.flag)"
      >
        {{ locale.title }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      languages: [
        { flag: 'ru', title: 'Русский' },
        { flag: 'en', title: 'English' }
      ]
    };
  },
  created() {
    this.getT9n(this.$i18n.locale);
  },
  methods: {
    btnLangClickHandler(locale) {
      this.getT9n(locale);
    },
    getT9n(locale) {
      import(`@/locales/${locale}.json`)
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

<style>
.SiteHeader {
  text-align: center;
  margin-bottom: 2em;
}
</style>
<style module>
.title {
  font-size: 2em;
}

@media screen and (min-width: 768px) {
  .title {
    font-size: 3em;
  }
}

.cite {
  font-size: 1.5em;
}

@media screen and (min-width: 768px) {
  .cite {
    font-size: 2em;
  }
}

.p {
  font-size: 1em;
}

@media screen and (min-width: 768px) {
  .p {
    font-size: 1.5em;
  }
}

.btn {
  font-size: 14px;
  padding: 1em 2em 1.1em;
  background-color: #4caf4c;
  border: 0 none;
  border-radius: 5px;
  color: #ffffff;
  transition: opacity 1s ease-out;
}

@media screen and (min-width: 768px) {
  .btn {
    font-size: 18px;
  }
}

.btn:not(:last-child) {
  margin-right: 2em;
}

.btn:hover {
  background-color: #178f17;
  transition: opacity 1s ease-out;
}
</style>
