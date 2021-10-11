<template>
  <div id="contImag">
    <div class="nombreProducto">
    <h4>{{product.nombre}}</h4>
    </div>
    <v-card id="contCard" class="mx-auto" max-width="400">
      <v-img id="contImgn"
        class="white--text align-end"
        height="200px"
        contain
        :src="product.img"
      >
        <v-card-title>Producto</v-card-title>
      </v-img>


      <v-card-text class="text--primary">
        <div class="nombre">
          <b>Nombre:</b> {{product.name}}
          </div>
        <div class="descripcion">
          <b>Descripción:</b> {{product.description}}
          </div>

        <div class="peso">
          <b>Peso Neto:</b> {{product.content}}
        </div>
      </v-card-text>

      <v-card-actions class= "cardActions">
        <div class="botones">
        <div class="btnEdit">
        <v-btn color="white" class="btnFondo botonesFooter" @click="DirEdit(product)" text> <v-icon left>mdi-pencil</v-icon>Editar</v-btn>
        </div>
        <div class="btnDelete">
        <v-btn color="white" class="btnFondo botonesFooter" @click="DirDelete(product)" text> <v-icon left>mdi-delete</v-icon>Eliminar </v-btn>
        </div>
        </div>
      </v-card-actions>

    </v-card>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  props: ["product"],
  data: () => {
      return {

      }
    },
    methods: {
      DirEdit(product){
        this.$router.push('/editar');
        console.log(product,"catalogo V")
        store.dispatch('setProductTemp',product)
      },
      DirDelete(product){
        confirm("Desea eliminar el producto");
        store.dispatch('setDelete',product)
      }
    }
};
</script>

<style>
h1 {
  text-align: center;
  font-size: 2rem;
}

#contImag {
  margin-top: 35px;
  margin-bottom: 35px;
  font-family: "Open Sans", sans-serif;
}

.btnFondo {
  background-color: #724293;
}

.botonesFooter {
  height: 32px;
  width: 85%;
}

#contCard {
  height: 100%;
  width: 100%;
}

#contImgn {
  height: 30%;
  width: 100%;
  object-fit: contain;
}

.btnEdit {
  width: 50%;
  display: flex;
  justify-content: center;
}

.btnDelete {
  width: 80%;
  display: flex;
  justify-content: center;
}

.cardActions {
  display: flex;
  justify-content: left;
  width: 100%;
}

.botones {
  width: 100%;
  display: flex;
  justify-content: left;
}

.nombreProducto{
  display: flex;
  justify-content: center;
}
.peso{
  padding-left: 2px;
}

.descripcion {
  padding-left: 2px;
}

.botonesb {
  width: 100%;
  display: flex;
  justify-content: left;
}

.btnEditb {
  width: 50%;
  display: flex;
  justify-content: center;
}

.btnDeleteb {
  width: 80%;
  display: flex;
  justify-content: center;
}
</style>
