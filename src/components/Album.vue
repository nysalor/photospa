<template>
  <div class="hello">
    <h1>{{ album.Name }}</h1>
    <ul>
      <router-link tag="li" v-bind:to="{ name : 'Image', params : { url: image.Url, filename: image.Filename }}" v-for="image in album.Images">
	<a><img v-lazy='image.ThumbnailUrl' class='thumbnail' /></a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
    data () {
	return {
	    album: {}
	}
    },
    created: function () {
	this.getAlbum(this.$route.params.albumId)
    },
    methods: {
	getAlbum(id) {
	    axios.get(process.env.API_ENDPOINT + "/albums/" + id)
		.then(response => {
		    this.album = response.data.Album;;
		    this.images = response.data.Album.Images;
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
