<template>
  <v-app>
    <v-app-bar dense app color="primary" dark>
      <router-link to="/" tag="button" class="btn btn-default glyphicon glyphicon-plus">Home | </router-link>
      <router-link to="/about" tag="button" class="btn btn-default glyphicon glyphicon-plus">| About</router-link>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
