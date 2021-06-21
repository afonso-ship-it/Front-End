<template>
<div>
  
  <div class="d-flex flex-column justify-space-between align-center" v-for="(item,id) in info" :key="id">
      <br>
      <img width="60%" :src="item.imagem">
      <h1>{{item.nomegenero}} </h1>
      <br>
  </div>


</div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      novoProduto:{
        genero:'',
        imagem:'',
      },
      mostraAviso: false,
      info: []
    }
  },
   mounted() {
    axios
     .get("https://apiartistas-default-rtdb.firebaseio.com/.json")
     .then(response => (this.info = response.data.generos));
  },
  methods:{
    submeterFormulario() {
      
      if(this.novoProduto.genero != '' && this.novoProduto.imagem != ''){
        this.mostraAviso= false;
        return axios.post('https://apiartistas-default-rtdb.firebaseio.com/generos.json', this.novoProduto);
      } else {
        alert("campos vazios");
        this.mostraAviso= true;    
        }
  },
}
}
</script>
<style scoped>
.form{
  max-width: 550px;
  box-sizing: border-box;
  margin: 30px;
  margin-top: 60px;
  padding: 30px;
  text-align: justify;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  width: 100%;
}

.button{
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #FFA500;
  background-color: white;
  color: #FFA500;
  text-decoration: none;
  padding: 10px 30px;
}
.button:hover,
.button:active {
  color: #fff;
  background-color: #FFA500;
}

.input-control {
  margin: 10px 0;
}
.input-control label {
  display: block;
  font-weight: bold;
  color: #FFA500;
}
.input-control input{
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px; 
}
.input-control input:focus{
  background-color: #eee;
  outline: none;
}
</style>
