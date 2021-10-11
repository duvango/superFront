<template>
    <div id="fondo">
        <div id="ContTitle">
            <h1>Editar productos</h1>
        </div>
        <div id="ContPrincA">
            <form-edit-datos/>
        </div>
        
    </div>
</template>

<script>
import FormEditDatos from "../components/FormEditDatos.vue";

export default {
    components: {
    FormEditDatos,
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
/*
#ImgCrear{
    float: left;
    width: 40%;
    margin-top: 20px;
    padding-right: 20px;
    padding-left: 50px;
}

#DatCrear{
    float: right;
    width: 50%;
    margin-top: 35px;
    padding-left: 20px;
    padding-right: 120px;
}
*/

#ContTitle{
    background-color: #f4f4f4;
    align-items: left;
    margin-top: 20px;
    margin-bottom: 18px;
    padding-left: 10px;
    
}

#ContPrincA{
  background-color: #f4f4f4;
  height: 830px;
}

#fondo{
  background-color: #f4f4f4;
}
/*
#CrearBT{
  padding-right: 250px;
}*/


</style>