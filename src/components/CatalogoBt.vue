<template>
  <section class="" id="conBT">
    <div style="font-family: 'Open Sans', sans-serif">
      <v-row
        class="d-flex justify-start mb-6"
        align="left"
        justify="start"
        width="80"
      >
        <v-col align="left" class="botonesHeader">
          <v-btn
            depressed
            class="btnFondo"
            color="white"
            @click="DirCrear"
            text
          >
            <b>Crear Producto</b>
          </v-btn>
          &nbsp; &nbsp;
          <v-btn depressed @click="DirBuscar" class="btnFondo" color="white" text>
            <b>Buscar Producto</b>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      //products: ["../assets/leche.jpeg", "../assets/papas_margarita.jpeg", "../assets/tomates.jpeg", "../assets/leche.jpeg", "../assets/papas_margarita.jpeg", "../assets/tomates.jpeg", "../assets/leche.jpeg", "../assets/papas_margarita.jpeg", "../assets/tomates.jpeg"],
    };
  },
  methods: {
    DirCrear() {
      this.$router.push("/crear");
    },
    DirBuscar(){
      this.$router.push('/buscar');
    },
  },
};
</script>

<style>
#conBT {
  background-color: #f4f4f4;
}

.btnFondo {
  background-color: #724293;
}

.botonesHeader {
  display: flex;
  justify-content: center;
  background: #ccd1d1;
}
</style>