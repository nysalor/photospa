<template>
  <div class="hello">
    <h1>{{ this.$route.params.filename }}</h1>
    <img v-bind:src='this.$route.params.url' />
  </div>
</template>

<script>
export default {
created: function () {
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
