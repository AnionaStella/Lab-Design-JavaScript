<template>
  <div id="app">
    <section class="hero is-dark">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="hero-body">
              <div class="container has-text-centered">
                <h1 class="title">Quizmakr</h1>
                <h2 class="subtitle">Generate a Dozenquiz for quiz night</h2>
                <div id="nav">
                  <router-link to="/">Home</router-link>|
                  <router-link to="/quiz">Quiz</router-link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/quiz">Quiz</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  background-color: cadetblue;
  color: darkslategrey;
  padding-bottom: 5vw;
  margin: auto;
}
.title {
  font-size: 5em;
  font-family: "Pacifico", cursive;
  padding: 0.5em;
}
/* #nav {
  margin: auto 30%;
} */
</style>
