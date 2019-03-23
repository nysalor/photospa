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
    margin: 10px;
}
div.thumbnail {
    height: 240px;
    width: 320px;
    position: relative;
}
div.thumbnail img {
    height: 240px;
    width: 320px;
    object-fit: cover;
}
div.thumbnail img.overwrap {
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    opacity: 0.6;
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
div.photo {
    position: relative;
    background: black;
    text-align: center;
    margin: 0;
}
div.photo div.columns {
    margin: 0;
}
div.photo img {
    max-width: 100vw;
    max-height: 85vh;
    padding: 5px;
    padding-right: 25px;
}
div.photo div.enlarge {
    position: absolute;
    right: 10px;
    text-align: right;
}
div.photo div.navigator {
    position: absolute;
    bottom: 10px;
    text-align: center;
}
div.photo div.navthumb.prev {
    position: absolute;
    bottom: 120px;
    left: 10px;
}
div.photo div.navthumb.next {
    position: absolute;
    bottom: 120px;
    right: 10px;
}
div.photo div.location {
    position: absolute;
    top: 10px;
}
div.photo div.info {
    position: absolute;
    top: 20px;
    left: 20px;
    -moz-opacity: 0.7;
    opacity: 0.7;
}

div.photo span.caption {
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
