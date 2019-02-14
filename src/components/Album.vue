<template>
  <div class="hello">
    <h1>{{ album.Name }}</h1>
    <article id="elemSwitch">
      <div id="listView" v-if="listView">
	<ul>
	  <li v-bind:to="{ name : 'Image', params : image}" @click="activate('image', idx)" v-for="(image, idx) in this.images">
	    <div class="thumbnail">
	      <a>
		<img v-lazy='image.ThumbnailUrl' />
	      </a>
	    </div>
	  </li>
	</ul>
      </div>
      <div id="imageView" v-else>
	<div class="image">
	  <a v-if="next" @click="activate('image', currentIdx + 1)">
	    <img v-bind:src="currentImage.Url" />
	  </a>

	  
	  <div class="nav">
	    <button v-if="prev" @click="activate('image', currentIdx - 1)">
	      Prev
	    </button>
	    <button @click="activate('list')">
	      Back
	    </button>
	    <button v-if="next" @click="activate('image', currentIdx + 1)">
	      Next
	    </button>
	    <div>
	    </div>
	  </div>
	</div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
    data () {
	return {
	    album: {},
	    images: [],
	    precv: false,
	    next: false,
	    currentImage: null,
	    currentIdx: 0,
	    previousImage: null,
	    nextImage: null,
	    neighborImaghes: [],
	    listView: true
	}
    },
    created: function () {
	this.getAlbum(this.$route.params.albumId);
    },
    methods: {
	getAlbum: function(id) {
	    axios.get(process.env.API_ENDPOINT + "/albums/" + id)
		.then(response => {
		    this.album = response.data.Album;
		    this.images = response.data.Album.Images;
		})
	},
	activate: function(type, idx) {
	    if (type == 'image') {
		this.listView = false
		this.currentImage = this.images[idx]
		this.currentIdx = idx
		if (idx > 0) {
		    this.prev = true
		    this.previousImage = this.images[idx - 1]
		} else {
		    this.prev = false
		}
		if (idx + 1 < this.images.length) {
		    this.next = true
		    this.nextImage = this.images[idx + 1]
		} else {
		    this.next = false
		}
	    } else {
		this.listView = true
	    }
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
