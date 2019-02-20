<template>
<div>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <li class="is-active"><a>Albums</a></li>
  </nav>
  <h1>albums</h1>
  <ul>
    <router-link tag="li" v-bind:to="{ name : 'Album', params : { albumId: album.Id }}" v-for="album in albums">
      <div class="thumbnail">
	<a>
	  <img v-lazy='album.ThumbnailUrl' />
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
	    albums: []
	}
    },
    created: function () {
	this.getalbums()
    },
    methods: {
	getalbums() {
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
