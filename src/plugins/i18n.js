import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

import ru from '@/locales/ru.json';

let i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: { ru },
  silentTranslationWarn: process.env.NODE_ENV === 'production'
});

export { i18n as default };
