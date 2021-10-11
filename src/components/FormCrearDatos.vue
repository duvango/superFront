<template>
    <section>
        <div id="ContPrinc">
            <div id="DatCrear">
                <validation-observer
                >
                    <v-text-field id="CampValid"
                            ref="CampValid"
                            v-model="ValidarCodigo" 
                            dense
                            readonly
                            disabled
                    ></v-text-field>
                    <v-text-field
                            v-model="Codigo"
                            label="Código"
                            :rules="codeRules"
                            :counter="5"
                            @keyup="ValidCod"
                            required
                            outlined
                            dense
                            type="number"
                    ></v-text-field>
                    <v-text-field
                            v-model="NombreProducto"
                            label="Nombre producto"
                            :rules="nameRules"
                            :counter="50"
                            required
                            outlined
                            dense
                    ></v-text-field>
                    <v-text-field
                            v-model="Descripcion"
                            label="Descripción"
                            :rules="descRules"
                            :counter="300"
                            required
                            outlined
                            dense
                    ></v-text-field>
                    <v-select
                        v-model="Tipo"
                        :items="itemsTip"
                        :rules="typeRules"
                        label="Tipo"
                        data-vv-name="Tipo"
                        required
                        outlined
                        dense
                    ></v-select>
                    <v-text-field
                            v-model="Sabor"
                            label="Sabor"
                            :rules="sabRules"
                            :counter="50"
                            required
                            outlined
                            dense
                    ></v-text-field>
                    <v-select
                        v-model="Marca"
                        :items="itemsMarc"
                        :rules="markRules"
                        label="Marca"
                        data-vv-name="Marca"
                        required
                        outlined
                        dense
                    ></v-select>
                    <v-text-field
                            v-model="Presentacion"
                            label="Presentación"
                            :rules="presentRules"
                            :counter="30"
                            required
                            outlined
                            dense
                    ></v-text-field>
                    <v-text-field
                            v-model="ContenidoNeto"
                            label="Contenido Neto"
                            :rules="contnetRules"
                            :counter="20"
                            required
                            outlined
                            dense
                    ></v-text-field>
                    <v-text-field
                            v-model="Valor"
                            label="Valor"
                            :rules="valRules"
                            required
                            outlined
                            dense
                            type="number"
                    ></v-text-field>
                </validation-observer>

            </div>
            <div id="ImgCrear">
                <div>
                    <v-text-field
                            v-model="pImg"
                            label="Imagen"
                            :rules="imgRules"
                            :counter="200"
                            @change="fileSelected"
                            required
                            outlined
                            dense
                    ></v-text-field>
                    <!-- <v-text-field
                        :rules="rules"
                        id="ImgUpload"
                        v-model="pImg"
                        type="file"
                        @change="fileSelected"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Url de la imagen"
                        prepend-icon="mdi-camera"
                        label="Escoja la imagen"
                    ></v-text-field> -->
                </div>
                <div id="recevImg">
                    <v-img
                        max-height="500"
                        max-width="600"
                        contain
                        :src="ResultImg"
                    ></v-img>
                </div>
            </div>
        </div>
        
        <div id="CrearBT">
            <v-row
            class="d-flex justify-start mb-6"
            
            width="80"
            >
            <v-col align="right">
                <v-btn id="BtForm"
                depressed
                color="white"
                text
                @click="Atras">
                Volver
                </v-btn>
            </v-col>
            <v-col align="left">
                <v-btn id="BtForm"
                depressed
                color="white"
                text
                @click="LeerDat">
                Crear Producto
                </v-btn>
            </v-col>
            </v-row>
        </div>
            
    </section>
</template>

<script>
import store from "../store/index.js";
export default {
    data: () => {
      
      return{
        rules: [
            value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        ],
        //datos de form imagen
        ResultImg: null,
        objImg: null,
        NombreImg: null,
        //datos de form datos
        ValidarCodigo: '',
        Codigo: '',
        NombreProducto: '',
        Descripcion: '',
        Tipo: null,
        itemsTip: [
            'Lácteo',
            'Gaseosa',
            'Galleta',
            'Ponque',
        ],
        Sabor: '',
        Marca: null,
        itemsMarc: [
            'Alpina',
            'Alquería',
            'Coca-cola',
            'Bimbo',
        ],
        Presentacion: '',
        ContenidoNeto: '',
        Valor: '',
        //reglas de form datos
        codeRules: [
            v => !!v || 'Código es obligatorio',
            v => v.length <= 5 || 'Código debe tener menos de 5 dígitos',
        ],
        nameRules: [
            v => !!v || 'Nombre es obligatorio',
            v => v.length <= 50 || 'Nombre debe tener menos de 50 carácteres',
        ],
        descRules: [
            v => !!v || 'Descripción es obligatorio',
            v => v.length <= 300 || 'Descripción debe tener menos de 300 carácteres',
        ],
        typeRules: [
            v => !!v || 'Tipo es obligatorio',
        ],
        sabRules: [
            v => !!v || 'Sabor es obligatorio',
            v => v.length <= 50 || 'Sabor debe tener menos de 50 carácteres',
        ],
        markRules: [
            v => !!v || 'Marca es obligatorio',
        ],
        presentRules: [
            v => !!v || 'Presentación es obligatorio',
            v => v.length <= 30 || 'Presentación debe tener menos de 30 carácteres',
        ],
        contnetRules: [
            v => !!v || 'Contenido neto es obligatorio',
            v => v.length <= 20 || 'Contenido neto debe tener menos de 20 carácteres',
        ],
        imgRules: [
            v => !!v || 'Imagen es obligatorio',
            v => v.length <= 200 || 'imagen debe tener menos de 200 carácteres',
        ],
        valRules: [
            v => !!v || 'Valor es obligatorio',
        ],
        NImg: {},
        pImg:"",
      }
    },
    methods: {
        
        //funciones de form imagen
        fileSelected(evt) {
            //evt.preventDefault();
            console.log(evt)
            this.NombreImg = evt;
            //this.objImg = URL.createObjectURL(evt);
            //this.ResultImg = this.objImg;
            //this.ResultImg = require("C:\\Users\\USER-1\\Documents\\cursoprogramacionmintic\\ciclo3\\proyecto\\código\\imagenes productos\\del valle-mora.jpg");
            
        },
        //Función de form datos
        ValidCod(){
            let codes = ["Addri", 67890, 55565, 11111, 12345, 99999];
            for (let i=0; i < codes.length; i++){
                if(this.Codigo == codes[i]){
                    this.ValidarCodigo = "Código ya existe";
                    break;
                    
                }else{
                    this.ValidarCodigo = "";
                    //document.getElementById("controlHid").style = "color: blue";
                }
            }

        },
        //Función del botón crear producto
        LeerDat(){
            
            if(this.Codigo=="" | this.NombreProducto=="" | this.Descripcion=="" | this.Tipo==null | this.Sabor=="" | this.Marca==null | this.Presentacion=="" | this.ContenidoNeto=="" | this.Valor=="" ){
                alert("Hay campos vacíos y no se puede registrar el producto");
            }else if(this.Codigo.length>5 | this.NombreProducto.length>50 | this.Descripcion.length>300 | this.Sabor.length>50 | this.Presentacion.length>30 | this.ContenidoNeto.length>20){
                alert("Hay datos inválidos y no se puede registrar el producto");
            }else{
                if(this.NombreImg=="" | this.NombreImg==null){
                    alert("No ha seleccionado ninguna imagen"); 
                }else{
                    console.log(this.Codigo+"\n"+this.NombreProducto+"\n"+this.Descripcion+"\n"+this.Tipo+"\n"+this.Sabor+"\n"+this.Marca+"\n"+this.Presentacion+"\n"+this.ContenidoNeto+"\n"+this.Valor);
                    console.log(this.ContenidoNeto);
                    var product={
                        id:this.Codigo,
                        name:this.NombreProducto,
                        description:this.Descripcion,
                        price:this.Valor,
                        type:this.Tipo,
                        taste:this.Sabor,
                        brand:this.Marca,
                        presentation:this.Presentacion,
                        content:this.ContenidoNeto,
                        img:this.pImg
                    }
                    store.dispatch('setCrear',product);
                    
                }
                
            }

        },
        //Función del botón inicio
        Atras(){
            this.$router.push('/home');
        }
        
    }

}
</script>

<style>

#ImgCrear{
    float: left;
    width: 38%;
    padding-right: 20px;
    padding-left: 100px;
    background-color: #f4f4f4;
}

#DatCrear{
    float: left;
    width: 50%;
    padding-left: 20px;
    background-color: #f4f4f4;
}

#ContPrinc{
    height: 650px;
    background-color: #f4f4f4;

}

#CrearBT{
    padding-right: 250px;
    padding-left: 60px;

}

#CampValid{
    border-width: 0px;
    background-color: #f4f4f4;
    height: 15px;
    color: red;
}

#BtForm{
    background-color: #724293;
}

</style>