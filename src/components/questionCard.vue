<template>
  <div>
    <div>{{ number }}</div>
    <br />
    <div v-html="question.question"></div>
  </div>
</template>
<script>
export default {
  name: "QuestionCard",
  props: {
    question: Object,
    number: Number
  }
};
</script>
