<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Albums</h2>
    <ul>
      <router-link tag="li" v-bind:to="{ name : 'Album', params : { id: album.id }}" v-for="album in albums">
	<a>{{ album.name }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
        data() {
            return {
                albums:[]
            }
        },
        methods: {
	    mounted() {
		axios.get(process.env.API_ENDPOINT + "/")
		    .then(response => {this.albums = response.data.albums})
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
