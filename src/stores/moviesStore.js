import {ref} from "vue";
import { defineStore } from 'pinia';
import axios from 'axios';

export const useMoviesStore = defineStore('movies', () => {
  const moviesList = ref([]),
    isLoadingMovies = ref(false);
  async function getMovies() {
    try{
      isLoadingMovies.value = true;
      const rs = await axios.get("https://mashroom-movies-api.netlify.app/api/movies");
      moviesList.value = rs.data.data;
      isLoadingMovies.value = false;
    }catch(err){
      console.log("ERR(getMovies): ", err);
      isLoadingMovies.value = false;
    }
  }

  const isLoadingMovie = ref(false);
  async function getMovie(id) {
    try {
      isLoadingMovie.value = true;
      const rs = await axios.get(`https://mashroom-movies-api.netlify.app/api/movie/${id}`);
      isLoadingMovie.value = false;
      return rs.data.data;
    }catch(err) {
      console.log("ERR(fetchMovie): ", err);
      isLoadingMovie.value = false;
      return undefined;
    }
  }

  return {
    moviesList,
    isLoadingMovies,
    isLoadingMovie,
    getMovies,
    getMovie,
  }
})
