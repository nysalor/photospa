<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div.thumbnail {
    width: 320px;
    position: relative;
}
div.thumbnail img {
    width: 100%;
}
div.thumbnail span.title {
    background: none repeat scroll 0 0 rgba(0,0,0,0.5);
    bottom: 0;
    color: White;
    font-size: 12px;
    height: 20px;
    left: 0;
    margin-top: 2px;
    line-height: 20px;
    position: relative;
    text-align: center;
    width: 100%;
    overflow: hidden;
    float: left;
    position: absolute;
}
div.image {
}
div.image span.caption {
    background: none repeat scroll 0 0 rgba(0,0,0,0.5);
    bottom: 0;
    color: White;
    font-size: 12px;
    height: 200px;
    left: 0;
    margin-top: 2px;
    line-height: 20px;
    position: relative;
    text-align: center;
    width: 300px;
    overflow: hidden;
    float: right;
    position: absolute;
}
</style>
