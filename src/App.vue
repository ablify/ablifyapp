<template>
  <div id="app">
    <app-nav />
    <main role="main" class="container-fluid">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import AppNav from "./components/AppNav";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    AppNav,
    Footer
  },

  data() {
    return {};
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding-top: 3.5rem;
}
.container-fluid {
  padding-left: 0 !important;
  padding-right: 0 !important;
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
</style>
