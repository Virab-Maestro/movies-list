import {ref} from "vue";
import { defineStore } from 'pinia';
import axios from 'axios';

export const useMoviesStore = defineStore('movies', () => {
  const moviesList = ref([]);
  async function getMovies() {
    try{
      const rs = await axios.get("https://mashroom-movies-api.netlify.app/api/movies");
      moviesList.value = rs.data.data;
    }catch(err){
      console.log("ERR(getMovies): ", err);
    }
  }

  return {
    moviesList,
    getMovies,
  }
})
