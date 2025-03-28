<template>
  <div class="breadcrumb">
    <router-link class="breadcrumb__link" to="/movies">Назад к списку</router-link>
  </div>

  <movies-item v-if="movieData" v-bind="movieData"/>
  <div v-else class="movie-not-found">К сожалению, по вашему запросу ничего не найдено...</div>

  <img class="movies-preloader" v-if="moviesStore.isLoadingMovie" src="../assets/img/loader.svg" alt="preloader" />
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";
import MoviesItem from "@/components/MoviesItem.vue";
import {useMoviesStore} from "@/stores/moviesStore.js";

const route = useRoute(),
  moviesStore = useMoviesStore(),
  props = defineProps({
    id: Number,
  });

const movieData = ref({});

if(route.meta.fromRoute?.name) {
  movieData.value = moviesStore.moviesList.find(e => e.id == props.id )
  console.log(movieData.value)
}else {
  fetchMovie(props.id);
}

async function fetchMovie(id) {
  movieData.value = await moviesStore.getMovie(id)
}
</script>

<style scoped lang="scss">
.breadcrumb {

  &__link {
    color: #FF5252;
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
  }
}

.movies-preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
