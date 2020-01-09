<template>
  <div class="SomeArticle">
    <h2 :class="$style.title">{{ articleTitle }}</h2>
    <p :class="$style.date">{{ articleDate }}</p>
    <p :class="$style.body">{{ articleBody }}</p>
  </div>
</template>

<script>
export default {
  name: 'SomeArticle',
  props: {
    articleTitle: {
      type: String,
      default: 'Заголовок статьи'
    },
    articleDate: {
      type: String,
      default: '30.10.2020'
    },
    articleBody: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt ea eos excepturi ipsa natus nostrum rem sed soluta velit! Distinctio facere repudiandae sequi soluta sunt. Amet distinctio eum ex.'
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
