<template>
  <h2 class="movies-title">Фильмы</h2>
  <movies-filter @filter="filterMovies"/>

  <div class="movies-list" v-if="!moviesStore.isLoading">
    <movies-item v-for="(movie, i) in moviesFiltered" :key="i" v-bind="movie" />
  </div>

  <img class="movies-preloader" v-else src="../assets/img/loader.svg" alt="preloader" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import MoviesFilter from "@/components/MoviesFilter.vue";
import MoviesItem from "@/components/MoviesItem.vue";
import {useMoviesStore} from "@/stores/moviesStore.js";

const moviesStore = useMoviesStore(),
  moviesFiltered = ref([]);

onMounted(async () => {
  await moviesStore.getMovies();
  moviesFiltered.value = moviesStore.moviesList;
})

function filterMovies(t) {
  if(t === "title") {
    moviesFiltered.value = [ ...moviesStore.moviesList ].sort((a, b) => {
      if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    });
  }else if(t === "year") {
    moviesFiltered.value = [ ...moviesStore.moviesList ].sort((a, b) => {
      if(a.year < b.year) return -1;
      if(a.year > b.year) return 1;
      return 0;
    });
  }else {
    moviesFiltered.value = moviesStore.moviesList;
  }
}
</script>

<style scoped lang="scss">
.movies {
  &__title {
    font-size: 32px;
    line-height: 32px;
    font-weight: 500;
  }

  &-preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
