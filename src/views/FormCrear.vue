<template>
  <div id="fondo">
      <div id="ContTitle">
          <h1>Crear productos</h1>
      </div>
      <div id="ContPrincA">
        <form-crear-datos/>
      </div>
      
  </div>
</template>

<script>
import FormCrearDatos from "../components/FormCrearDatos.vue";

export default {
    components: {
    FormCrearDatos,
  },
    data: ()=>{
        return{

        }
    },
    methods: {
      LeerDat(){
        console.log(this.$refs.FormCrearDat);
        

      }

    }
}
</script>

<style>

#ContTitle{
    background-color: #f4f4f4;
    align-items: left;
    margin-top: 20px;
    margin-bottom: 18px;
    padding-left: 10px;
    
}

#ContPrincA{
  background-color: #f4f4f4;
  height: 730px;
}

#fondo{
  background-color: #f4f4f4;
}
/*
#CrearBT{
  padding-right: 250px;
}*/


</style>