<template>
  <div>
    <div>
      <p>Question nr {{ number }}</p>
    </div>
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
