<template>
  <div class="SiteHeader">
    <h1 class="title">Захардкоженный заголовок сайта</h1>
    <cite class="cite">Описание а-ля приветствие того, что делает сайт</cite>
    <p class="p">Переключение языков:</p>
    <div class="buttonDiv">
      <button type="button" class="btn">Русский</button>
      <button type="button" class="btn">Английский</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader'
};
</script>

<style module>
.SiteHeader {
  visibility: visible;
}
</style>
