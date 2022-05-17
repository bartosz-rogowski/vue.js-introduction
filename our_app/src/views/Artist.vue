<style scoped>
.addmargin {
  margin-top: 10px;
  margin-bottom: 10px;
}

.vue-logo-back {
  background-color: black;
}

.card-title{
  margin-top: 5px;
}

.card-body{
  background-color: #e7e8e0;
}
</style>

<template>

  <div class="home">


    <!-- <div class="col-md-6 centeralign">
        <p>This Page Displays a list of artists</p>
        <p>Clicking on a Card Displays the name below. This is to demonstrate passing data from parent to child component</p>-->
    <div class="container">
    <div class="row" v-for="artists in chunkedArtists" :key="artists">
      <div class="col-md" v-for="artist in artists" :key="artist.id">
        <div class="card centeralign addmargin" style="width: 18rem;">
          <div class="card-body" v-on:click="setSelectedartist(artist.name)">
            <img class="card-img-top" :src="artist.image" alt="Card image cap">
            <h5 class="card-title">{{ artist.name }}</h5>
            <img v-bind:src="artist.link" />
            <a class="btn btn-primary" v-on:click="goToDetailsPage(artist.id)"><span style="color:white">Click to see details...</span></a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Display v-if="selectedArtist != ''" :selectedArtist="selectedArtist" />
  </div>

</template>

<script>

// @ is an alias to /src
import Display from '@/components/Display.vue'
import axios from 'axios'
import chunk from 'chunk'

export default {
  name: 'artists',
  computed: {
    chunkedArtists() {
      return chunk(this.artistlist, 3)
    }
  },
  mounted() {
    axios({
      method: "GET",
      "url": "assets/samplejson/artistlist.json"
    }).then(response => {
      this.artistlist = response.data;
    }, error => {
      // eslint-disable-next-line
      console.error(error);
    });
  },
  data() {
    return {
      artistlist: [],
      selectedArtist: ""
    }
  },
  components: {
    Display
  },
  methods: {
    setSelectedartist: function (name) {
      this.selectedArtist = name;
    },
    goToDetailsPage: function (id) {
      this.$router.push("/artistdetails/" + id);
    }
  }
}

</script>
