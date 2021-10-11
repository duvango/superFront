<template>
  <v-app>
    <v-app-bar app color="#aed269" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/logosuper.png"
          transition="scale-transition"
          width="250"
        />
        <!-----
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
        --->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div class="contenedor">
      <router-view />
      </div>
    </v-main>

    <!-- Inicio pie del sitio -->
    <div class="prueba">
    <v-app-bar color="#aed269" dark>
      <!-- Copyright -->
      <div align="center">
        © 2021 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">CRUD asociados</a>
      </div>
      <!-- Copyright -->
    </v-app-bar>
    </div>
    <!-- fin pie del sitio -->
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
v-main {
  background-color: #f4f4f4;
}
</style>
