<style scoped>
.addmargin {
  margin-top: 10px;
  margin-bottom: 10px;
}

ul{
    list-style-type: none;
}

.vue-logo-back {
  background-color: black;
}

.card {
  margin-bottom: 20px;
}

.card-title{
  margin-top: 5px;
}
</style>

<template>

  <div class="home">
    <div class="card centeralign" style="width: 35%;" v-if="artistDetails.id">
      <div class="card-header">
        Artist details
      </div>
      <!-- <div class="card-body"> -->
      <h5 class="card-title">{{ artistDetails.name }}</h5>
      <p class="card-text">Name: {{ artistDetails.name }}</p>
      <img v-bind:src="artistDetails.image" />
      <p class="card-text">Site: <a :href="artistDetails.site" target="_blank">{{ artistDetails.site }}</a></p>
      <p class="card-text">Born: {{ artistDetails.born }}</p>
      <p class="card-text">Country: {{ artistDetails.country }}</p>
    </div>
    <p class="card-text">Albums:</p>
    <ul>
      <div class="container">
        <div class="row" v-for="details in chunkedDetails">
          <div class="col-md" v-for="album in details">
            <li>
              <div class="card centeralign addmargin" style="width: 18rem;">
                <div class="card-body">
                  <img class="card-img-top" :src="album.cover" alt="Card image cap">
                  <p class="card-text">Title: {{ album.name }}</p>
                  <p class="card-text">Date of release: {{ album.released }}</p>
                  <p class="card-text">Number of songs: {{ album.songs }}</p>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </ul>
    <a v-on:click="goToMainPage()" class="btn btn-primary"><span style="color:white">Go Back</span></a>
  </div>



</template>

<script>

// @ is an alias to /src
import axios from 'axios'
import chunk from 'chunk'

export default {
  name: 'artistdetails',
  computed: {
    chunkedDetails() {
      return chunk(this.artistDetails.albums, 3)
    }
  },
  mounted() {
    axios({
      method: "GET",
      "url": "assets/samplejson/artistlist.json"
    }).then(response => {
      this.artistDetails = response.data[this.$route.params.id - 1];
    }, error => {
      console.error(error);
    });
  },
  data() {
    return {
      artistDetails: []
    }
  },
  methods: {
    goToMainPage: function () {
      this.$router.push("/artists");
    }
  }
}

</script>
