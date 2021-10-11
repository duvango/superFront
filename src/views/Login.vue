<template>
    <v-card id="card-login" class="mx-auto" max-width="344">
        <v-card-text>
        <p class="text-h4 text--primary">Login</p>
        <v-form>
            <v-text-field
            label="Usuario"
            placeholder="Usuario"
            outlined
            ></v-text-field>
            <v-text-field
            label="Contraseña"
            placeholder="Contraseña"
            outlined
            type="password"
            ></v-text-field>
        </v-form>
        </v-card-text>
        <v-card-actions>
        <v-btn text color="grey"> Registrar </v-btn>
        <v-btn text color="deep-purple accent-4" @click="login"> Iniciar Sesión </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: ()=>{
        return{

        }
    },
    methods: {
        login(){
            console.log("Verificando credenciales.......");
            //Redirigir al Home
            this.$router.push('/home');

        }

    }

}
</script>

<style>
#card-login{
    margin-top: 10%;
}

</style>