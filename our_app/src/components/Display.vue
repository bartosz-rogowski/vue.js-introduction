<template>
  <div class="col-md-3 centeralign">
    <b-alert show>Selected {{ selectedArtist }}</b-alert>
  </div>
</template>

<script>
export default {
  name: 'display',
  props: {
    selectedArtist: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  list-style-type: none;
}

a {
  color: #42b983;
}

b-alert {
  margin: 15px;
}
</style>
