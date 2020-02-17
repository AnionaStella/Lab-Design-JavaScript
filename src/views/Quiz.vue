<template>
  <div class="quiz">
    <Questions />
    <h1></h1>
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
<style scoped>
#app {
  background-color: cadetblue;
  color: darkslategrey;
  padding-bottom: 5vw;
  margin: auto;
}
</style>