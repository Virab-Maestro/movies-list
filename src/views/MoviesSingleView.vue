<template>
  <div class="breadcrumb">
    <router-link class="breadcrumb__link" to="/movies">Назад к списку</router-link>
  </div>

  <template v-if="!moviesStore.isLoadingMovie">
    <movies-item v-if="movieData" v-bind="movieData"/>
    <div v-else class="movie-not-found">К сожалению, по вашему запросу ничего не найдено...</div>
  </template>

  <img v-else class="movies-preloader" src="../assets/img/loader.svg" alt="preloader" />
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
}else {
  fetchMovie(props.id);
}

async function fetchMovie(id) {
  movieData.value = await moviesStore.getMovie(id)
}
</script>

<style scoped lang="scss">
.breadcrumb {
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 40px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #C4C4C4;
  }

  &__link {
    position: relative;
    padding-left: 32px;
    color: rgba(255, 82, 82, .98);
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    text-decoration: underline;

    &::before {
      content: "";
      width: 24px;
      height: 24px;
      position: absolute;
      top: 55%;
      left: 0;
      transform: translateY(-50%);
      background-image: url("@/assets/img/arrow.svg");
      background-repeat: no-repeat;
    }
  }
}

.movies-preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.movie-not-found {
  font-size: 32px;
  line-height: 32px;
  font-weight: 500;
  padding-top: 8px;
}
</style>
