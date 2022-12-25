<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
      <NavBar></NavBar>
    </v-navigation-drawer>
  
    <v-app-bar app class="gradient-color" style="color: white">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        style="color: white"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Admin Dashboard</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
  export default {
    components:{
      NavBar,
    },
    data: () => ({ drawer: null }),

  }
</script>

<style>
@import url("https://kit-pro.fontawesome.com/releases/v6.1.2/css/pro.min.css");
.v-list-group--active
  > .v-list-group__header
  > .v-list-group__header__append-icon
  .v-icon {
  transform: rotate(-90deg);
}
.gradient-color {
  background: rgb(22, 153, 171);
  background: linear-gradient(
    90deg,
    rgba(22, 153, 171, 1) 0%,
    rgba(30, 168, 185, 1) 43%,
    rgba(8, 110, 123, 1) 100%,
    rgba(154, 59, 170, 1) 100%,
    rgba(111, 78, 209, 1) 100%
  );
}
::-webkit-scrollbar {
  width: 5px;
}

/* Track */

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */

::-webkit-scrollbar-thumb {
  background: rgb(194, 190, 190);
}

/* Handle on hover */

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
