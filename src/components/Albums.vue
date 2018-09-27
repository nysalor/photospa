<template>
  <div class="hello">
    <h1>Albums</h1>
    <ul>
      <router-link tag="li" v-bind:to="{ name : 'Album', params : { id: album.Id }}" v-for="album in albums">
	<a>{{ album.Name }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      albums: []
    }
  },
  created: function () {
    this.getAlbums()
  },
  methods: {
    getAlbums() {
      axios.get(process.env.API_ENDPOINT + "/")
	.then(response => {
	  this.albums = response.data.Albums;
	})
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
