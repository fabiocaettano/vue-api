<template>
  <div id="nav">
    <Navbar />
    <div class="container mt-3">
      <router-view/>
    </div>  
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default{
  components: {
    Navbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  

  a {
    font-weight: bold;
    /*color: #2c3e50;*/

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
