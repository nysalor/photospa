<template>
<div>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <li class="is-active"><a>Albums</a></li>
  </nav>
  <div class="columns">
    <div class="column is-full box is-centered">
      <h1>Albums</h1>
      <input v-model="searchString" type="text" class="form-control" placeholder="" v-on:change="searchAlbums()">
      <button v-on:click="searchAlbums">
	<span class="icon is-small"><i class="fas fa-search"></i></span>
      </button>
    </div>
  </div>
  <ul>
    <router-link tag="li" v-bind:to="{ name : 'Album', params : { albumId: album.Id }}" v-for="album in albums">
      <div class="thumbnail">
	<a>
	  <img v-if="album.ThumbnailUrl" v-lazy='album.ThumbnailUrl' />
	  <img v-else src="../assets/notfound.png" />
	  <img v-if="album.Locked == 1" src="../assets/updating.png" class="overwrap">
	  <span class="title">
	    <strong>
	      {{ album.Name }}
	    </strong>
	    ({{ album.ImagesCount }})
	  </span>
	</a>
      </div>
    </router-link>
  </ul>
</div>
</template>

<script>
export default {
    data () {
	return {
	    albums: [],
	    searchString: ''
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
	},
	searchAlbums() {
	    this.albums = [];
	    axios.post(process.env.API_ENDPOINT + "/search", { search: this.searchString })
		.then(response => {
		    this.albums = response.data.Albums;
		})
	}
    },
    watch: {
	searchString() {
	    this.searchAlbums()
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
