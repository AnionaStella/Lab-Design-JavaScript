<template>
  <div>
    <label for="welcomeName">Enter your name:</label>
    <input type="text" v-model="nameText" id="welcomeName" />
    <h1>Welcome {{ nameText }}</h1>
    <!-- GÖR CUSTOM EVENT FÖR ATT SKICKA NAMN TILL QUESTIONS SIDA ? -->
  </div>
</template>

<script>
export default {
  name: "Name",
  computed: {
    nameText: {
      get() {
        return this.$store.state.nameText;
      },
      set(nameText) {
        this.$store.commit("setnameText", nameText);
      }
    }
  }
  // props: { enterName: String }
};
</script>
