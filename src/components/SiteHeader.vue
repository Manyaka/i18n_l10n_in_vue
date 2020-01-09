<template>
  <div class="SiteHeader">
    <h1 :class="$style.title">Захардкоженный заголовок сайта</h1>
    <cite :class="$style.cite">Описание а-ля приветствие того, что делает сайт</cite>
    <p :class="$style.p">Переключение языков:</p>
    <div>
      <button type="button" :class="$style.btn">Русский</button>
      <button type="button" :class="$style.btn">Английский</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader'
};
</script>

<style>
.SiteHeader {
  text-align: center;
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

.btn:first-child {
  margin-right: 2em;
}

.btn:hover {
  background-color: #178f17;
  transition: opacity 1s ease-out;
}
</style>
