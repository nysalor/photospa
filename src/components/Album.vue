<template>
<div>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul v-if="listView">
      <router-link tag="li" v-bind:to="{ name : 'Albums' }">
	<a>Albums</a>
      </router-link>
      <li class="is-active"><a>{{ album.Name }}</a></li>
    </ul>
    <ul v-else>
      <router-link tag="li" v-bind:to="{ name : 'Albums' }">
	<a>Albums</a>
      </router-link>
      <li><a @click="activate('list')">{{ album.Name }}</a></li>
      <li class="is-active"><a>{{ currentImage.Filename }}</a></li>
    </ul>
  </nav>
  <div class="columns">
    <div v-if="listView" class="column is-full box is-centered">
      <h1>{{ album.Name }} ({{ images.length }} images)</h1>
      <input v-model="searchString" type="text" class="form-control" placeholder="" v-on:change="searchImages()">
      <button v-on:click="searchImages">
	<span class="icon is-small"><i class="fas fa-search"></i></span>
      </button>
    </div>
    <div v-else class="column is-full box is-centered">
      <h1>{{ currentImage.Filename }}</h1>
    </div>
  </div>
  <article id="elemSwitch">
    <div id="listView" v-if="listView">
      <ul class="list">
	<li v-bind:to="{ name : 'Image', params : image}" @click="activate('image', idx)" v-for="(image, idx) in this.images">
	  <div class="thumbnail">
	    <img v-lazy='image.ThumbnailUrl' />
	  </div>
	</li>
      </ul>
    </div>
    <div id="imageView" v-else>
      <div class="photo" @mouseenter="navOn" @mouseleave="navOff">
	<div class="columns">
	  <div class="enlarge column" v-if="navActive">
	    <a v-bind:href="currentImage.Url" target="_blank">
	      <span class="icon"><i class="fas fa-2x fa-search-plus"></i></span>
	    </a>
	  </div>
	  <div class="info column is-one-quarter box has-text-left" v-if="navActive">
	    <p>
	      <span class="icon"><i class="fas fa-file-image"></i></span>
	      {{ currentImage.Filename }}
	    </p>
	    <p>
	      <span class="icon"><i class="fas fa-calendar-alt"></i></span>
	      {{ currentImage.TookAt }}
	    </p>
	    <p>
	      <span class="icon"><i class="fas fa-camera"></i></span>
	      {{ currentImage.Model }}
	    </p>
	    <p>
	      <span class="icon"><i class="fas fa-film"></i></span>
	      {{ currentImage.FocalLength }}mm F{{ currentImage.FNumber }} {{ currentImage.ExposureTime }} ISO{{currentImage.Iso }} 
	    </p>
	    <p v-if="location">
	      <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
	      <a v-bind:href="'http://maps.google.co.jp/maps?q=' + this.location" target="_blank">
		{{ location }}
	      </a>
	    </p>
	  </div>
	</div>
	<article v-if="next">
	  <a @click="activate('image', currentIdx + 1)">
	    <img v-bind:src="currentImage.Url" />
	  </a>
	</article>
	<article v-else>
	  <img v-bind:src="currentImage.Url" />
	</article>
	<div class="columns" v-if="navActive">
	  <div class="navthumb column prev">
	    <figure class="image is-128x128 prev" v-if="prev">
	      <a @click="activate('image', currentIdx - 1)">
		<img v-bind:src='previousImage.ThumbnailUrl' />
	      </a>
	    </figure>
	  </div>
	  <div class="navthumb column next">
	    <figure class="image is-128x128" v-if="next">
	      <a @click="activate('image', currentIdx + 1)">
		<img v-bind:src='nextImage.ThumbnailUrl' />
	      </a>
	    </figure>
	  </div>
	  <div class="navigator column is-full" v-if="navActive">
	    <button class="button is-black s-large" v-if="prev" @click="activate('image', currentIdx - 1)">
	      <span class="icon"><i class="fas fa-caret-left"></i></span>
	      Prev
	    </button>
	    <button class="button is-black s-large" @click="activate('list')">
	      Back
	    </button>
	    <button class="button is-black s-large" v-if="next" @click="activate('image', currentIdx + 1)">
	      Next
	      <span class="icon"><i class="fas fa-caret-right"></i></span>
	    </button>
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
	    prev: false,
	    next: false,
	    currentImage: null,
	    currentIdx: 0,
	    previousImage: null,
	    nextImage: null,
	    neighborImaghes: [],
	    listView: true,
	    navActive: false,
	    location: null,
	    searchString: ''
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
		if (this.currentImage.Latitude != 0 && this.currentImage.Longitude != 0) {
		    var latitude = Math.floor(this.currentImage.Latitude*10000) / 10000
		    var longitude = Math.floor(this.currentImage.Longitude*10000) / 10000
		    this.location = String(latitude) + ',' + String(longitude)
		} else {
		    this.location = null
		}
	    } else {
		this.listView = true
	    }
	},
	navOn: function() {
	    this.navActive = true
	},
	navOff: function() {
	    this.navActive = false
	},
	searchImages: function() {
	    this.images = [];
	    axios.post(process.env.API_ENDPOINT + "/albums/" + this.album.Id + "/search", { search: this.searchString })
		.then(response => {
		    this.album = response.data.Album;
		    this.images = response.data.Album.Images;
		})
	}
    },
    watch: {
	searchString() {
	    this.searchImages()
	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul.list {
  list-style-type: none;
  padding: 0;
}
ul.list li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
