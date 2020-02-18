<template>
  <div class="quiz content has-text-centered">
    <br />
    <p>Press the button to get 12 questions, if you want new ones, press the button again.</p>
    <Questions />
  </div>
</template>
<script>
import Questions from "@/components/questions.vue";

export default {
  name: "Quiz",
  components: {
    Questions
  }
};
</script>
