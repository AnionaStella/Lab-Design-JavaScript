
<template>
  <div>
    <div class="columns is-multiline is-centered">
      <div
        class="column is-one-quarter"
        v-for="(question, index) in $store.state.questions"
        :key="question.question"
      >
        <QuestionCard :question="question" :number="index+1"></QuestionCard>
        <br />
        <Answer :question="question" />
      </div>
    </div>
    <div class="buttons are-large is-centered">
      <button class="button" @click="clickMe">Generate quiz</button>
    </div>
  </div>
</template>

<script>
import QuestionCard from "../components/questionCard.vue";
import Answer from "../components/answer.vue";

export default {
  name: "Questions",
  components: {
    QuestionCard,
    Answer
  },
  methods: {
    clickMe() {
      fetch("https://opentdb.com/api.php?amount=12&type=boolean")
        .then(response => response.json())
        .then(result => {
          this.$store.state.questions = result.results;
        });
    }
  }
};
</script>

<style>
.columns {
  padding-top: 2vh;
}
.column {
  padding: 2vw;
  border-style: groove;
  border-color: beige;
  margin: 1vw;
  background-color: white;
}
</style>


