<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Select</h2>
    </div>
    <div class="columns">
      <div class="column is-8">
        <div class="card edit-detail">
          <header class="card-header">
            <p class="card-header-title">{{ question.question }}</p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field">
                <label class="label" for="que">Question</label>
                <div class="card" id="que"></div>
              </div>
              <div class="field">
                <label for="category">
                  Category
                  <div class="select is-primary">
                    <select
                      id="category"
                      v-model="question.category"
                      :class="{ invalid: !question.category }"
                      @keyup.esc="clearCategory"
                    >
                      <option disabled value>Please select one</option>
                      <option
                        v-for="question in questions"
                        :key="question.category"
                      >{{category.name}}</option>
                    </select>
                  </div>
                </label>
              </div>
              <div class="field">
                <label for="answer">
                  answer
                  <div class="select is-primary">
                    <select
                      id="answer"
                      v-model="question.answer"
                      :class="{ invalid: !question.answer }"
                      @keyup.esc="clearAnswer"
                    >
                      <option disabled value>Please select one</option>
                      <option
                        v-for="question in questions"
                        :key="question.question"
                      >{{question.correct_answer}}</option>
                      <option
                        v-for="question in questions"
                        :key="question.question"
                      >{{question.incorrect_answer}}</option>
                    </select>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="notification is-info">
          <pre>{{ message }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      question: {
        question: null,
        category: "",
        correct_answer: "",
        incorrect_answer: ""
      },
      message: ""
    };
  },
  methods: {
    created() {
      fetch("https://opentdb.com/api.php?amount=12") // kan använda : &difficulty=easy, &category=11, amount=10 tex:https://opentdb.com/api.php?amount=2&category2&difficulty=easy
        .then(response => response.json())
        .then(result => {
          this.questions = result.results;
        });
    }
  }
};
</script>