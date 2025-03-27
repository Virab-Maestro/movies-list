import {ref} from "vue";
import { defineStore } from 'pinia';
import axios from 'axios';

export const useMoviesStore = defineStore('movies', () => {
  const moviesList = ref([]),
    isLoading = ref(false);
  async function getMovies() {
    try{
      isLoading.value = true;
      const rs = await axios.get("https://mashroom-movies-api.netlify.app/api/movies");
      moviesList.value = rs.data.data;
      isLoading.value = false;
    }catch(err){
      console.log("ERR(getMovies): ", err);
      isLoading.value = false;
    }
  }

  return {
    moviesList,
    isLoading,
    getMovies,
  }
})
