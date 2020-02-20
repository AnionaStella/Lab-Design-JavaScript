<template>
  <div>
    <input type="radio" v-model="booleanButton" value="correct" />
    {{ question.correct_answer }}
    <input type="radio" v-model="booleanButton" value="incorrect" />
    {{ question.incorrect_answers[0] }}
    <p>What you have chosen is {{ booleanButton }}</p>
    <!-- $store.state. -->
  </div>
</template>

<script>
export default {
  name: "Answer",
  data() {
    return {
      booleanButton: ""
    };
  },
  props: { question: Object }
};
</script>

<style>
</style>