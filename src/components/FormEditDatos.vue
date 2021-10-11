<template>
    <section>
        <div id="ContPrincE">
            <div id="ImgEdit">
                <div>
                    <v-text-field
                            v-model="pImg"
                            label="Imagen"
                            :rules="imgRules"
                            :counter="200"
                            @change="fileSelectedE"
                            required
                            outlined
                            dense
                    ></v-text-field>
                    <!-- <v-file-input
                        :rules="rules"
                        id="ImgUpload"
                        type="file"
                        @change="fileSelectedE"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick an avatar"
                        prepend-icon="mdi-camera"
                        label="Escoja la imagen"
                    ></v-file-input> -->
                </div>
                <div id="recevImgE">
                    <v-img
                        max-height="500"
                        max-width="600"
                        contain
                        :src="ResultImg"
                    ></v-img>
                </div>
            </div>
            <div id="DatEdit">
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
                            required
                            outlined
                            dense
                            type="number"
                            readonly
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
        </div>
        
        <div id="EditBT">
            <v-row
            class="d-flex justify-start mb-6"
            
            width="80"
            >
            <v-col align="right">
                <v-btn id="BtForm"
                depressed
                color="white"
                text
                @click="Volver">
                Inicio
                </v-btn>
            </v-col>
            <v-col align="left">
                <v-btn id="BtForm"
                depressed
                color="white"
                text
                @click="LeerDatE">
                Editar Producto
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
        product:{},  
        rules: [
            value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        ],
        //datos de form imagen
        ResultImg: null,
        objImg: null,
        NombreImg: null,
        //datos de form datos
        ValidarCodigo: '',
        Codigo: product.id,
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
        nameRules: [
            v => !!v || 'Nombre es obligatorio',
            v => v.length <= 50 || 'Nombre debe tener menos de 50 carácteres',
            v => /^[A-Za-z]+$/.test(v) || 'Nombre no debe contener carácteres especiales, ni números',
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
    computed :()=> {
        product= () => {
          return store.state.productTemp;
        }
    },
    methods: {
        //funciones de form imagen
        fileSelectedE(evt) {
            console.log(evt)
            this.NombreImg = evt;
        },
        //Función de form datos
        //Función del botón Editar producto
        LeerDatE(){
            
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
                    store.dispatch('setUpdate',product);
                    
                }
                
            }

        },
        //Función del botón inicio
        Volver(){
            this.$router.push('/home');
        }
    }

}
</script>

<style>

#ImgEdit{
    float: left;
    width: 40%;
    margin-top: 20px;
    padding-right: 20px;
    padding-left: 50px;
    background-color: #f4f4f4;
}

#DatEdit{
    float: right;
    width: 50%;
    margin-top: 35px;
    padding-left: 20px;
    padding-right: 120px;
    background-color: #f4f4f4;
}

#ContPrincE{
    height: 720px;
    background-color: #f4f4f4;
}

#EditBT{
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