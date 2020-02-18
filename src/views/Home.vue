<template>
  <div class="home container has-text-centered">
    <div>
      <h1>Welcome to Quizmakr</h1>
      <p>Here you can generate quizzes for pubnight with quick true or false answers.</p>
      <p>Time to start quizzing!</p>
      <br />
      <div class="buttons are-medium is-centered">
        <button class="button">
          <router-link to="/quiz">Start quizzing</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped>
.home {
  background-color: cadetblue;
  color: darkslategrey;
  padding-bottom: 35%;
  margin: auto;
}
h1 {
  font-size: 3rem;
}
</style>
