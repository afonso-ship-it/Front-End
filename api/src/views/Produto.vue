<template>
<div>
  <v-container class="container" style="padding-top:80px">
      <input type="text" v-model="artista" v-on:keyup.enter="carregaPesquisa(artista)">
      <v-btn color="orange accent-2" @click="carregaPesquisa(artista)"> Pesquisa </v-btn>
      <h></h>
      <v-btn
      ref="button"
      color="error"
      class="mr-4"
      @click="reset">
      Reset Form
    </v-btn>
      
      <div v-if="artista!=null && limpa == false">  <!-- null && limpa == false-->
 
        <h4>Artista Procurado: {{artista}}</h4>
 
     
        <v-img height="350" :src="url_imagem"></v-img>
        
        <h4>Género Musical: </h4>
        <div v-for="(item,index) in listaartista" :key="index">
          {{item.name}}
        </div>
       </div>
       
      <div >
      <v-card-actions v-if="apareceFav">
        <v-btn color="pink" text @click="favorito(item)">
          Favorito
          </v-btn>
      </v-card-actions>
      </div>
      <div class="colfav">
        <div v-if="favoritos.length >0">
          <h3>
            Favoritos
          </h3>
          <div v-for="(fav, index) in favoritos" :key="index">
            {{fav}} <v-icon x-small @click="remofav(index)">mdi-close-circle-outline</v-icon>
          </div>
        </div>
      </div>
      <hr /><br>
 
    <div v-if="artista == null">
      <div v-for="(item, index) in info" :key="index">
        <ul>
          <h3>{{item.headline}}</h3>
          <p>{{item.kicker}}</p>
        </ul>
 
      </div>
    </div>
 
  </v-container>
</div>
</template>
 
<script>
import axios from "axios";
 
export default {
  //props: ["id"],
  data() {
    return {
      info: null,
      favoritos: [],
      snackbar: false,
      imagem: null,
      listaartista: null,
      url: null,
      url_imagem: null,
      artista: null,
      apareceFav: false,
      pesquisado: '',
      limpa: false,
    };
  },
  mounted() {
    this.apareceFav = false;
    axios
     .get("https://www.vagalume.com.br/news/index.js")
     .then(response => (this.info = response.data.news));
  },
 
  methods: {
    favorito(item){
      item = this.pesquisado;
      if(this.favoritos.indexOf(item)===-1){
        this.favoritos.push(item);
      }else{
        this.snackbar = true;
      }
      console.log(this.favoritos);
     // alert(this.favoritos);
    },
    remofav(item){
      this.favoritos.splice (item,1)
    },
    carregaPesquisa(pesquisa) {

      if(pesquisa == null) {
        this.apareceFav = false;
        console.log(" this.apareceFav " +  this.apareceFav);
        axios
        .get("https://www.vagalume.com.br/news/index.js")
        .then(response => (this.info = response.data.news));

      }
      else{
       
        axios
        .get("https://www.vagalume.com.br/" + pesquisa +"/index.js")
        .then(response => (this.listaartista = response.data.artist.genre));
        this.url = "https://www.vagalume.com.br/" + pesquisa;
        this.url_imagem = this.url + "/images/" + pesquisa + ".jpg";
        this.artista = pesquisa;



        var http = new XMLHttpRequest();
        http.open('HEAD', this.url, false);
        http.send();
        if (http.status != 404)
            this.pesquisado = pesquisa,
            this.limpa = false,
             this.apareceFav = true;
      
        else {
          console.log("erro");  
          this.limpa = true;
        }
            
      }
      
    },
    reset() { 
      this.artista = "";
    
     this.carregaPesquisa();
      }
  },
};
</script>

<style>
.colfav{
  flex: 20%
}


</style>