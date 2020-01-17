import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

let messages = {
  ru: {
    siteTitle: 'Захардкоженный заголовок сайта',
    siteText: 'Описание а-ля приветствие того, что делает сайт',
    changeLang: 'Переключение языков:'
  },
  en: {
    siteTitle: 'Hardcoded site title',
    siteText: 'Description a la greeting of what the site does',
    changeLang: 'Language switching:'
  }
};

let i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages
});

export { i18n as default };
