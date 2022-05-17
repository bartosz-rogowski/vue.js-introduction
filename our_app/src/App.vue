<template>
  <div id="app">
    <headerComp/>
    <router-view />
    <footerComp/>
  </div>
</template>

<script>
import footerComp from '@/components/Footer.vue';
import headerComp from '@/components/Header.vue';

export default {
  name: "myapp",
  components: {
    footerComp,
    headerComp
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.centeralign {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
