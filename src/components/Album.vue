<template>
  <div class="hello">
    <h1>{{ album.name }}</h1>
    <ul>
      <router-link tag="li" v-bind:to="{ name : 'Image', params : { id: image.id }}" v-for="image in album.images">
	<a>{{ image.filename }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
        data() {
            return {
                album:{}
            }
        },
        methods: {
	    mounted() {
		axios.get(process.env.API_ENDPOINT + "/albums/" + album.id)
		    .then(response => {this.album = response.data.album})
	    }
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
