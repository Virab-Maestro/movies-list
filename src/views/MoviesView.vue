<template>
  <h2 class="movies-title">Фильмы</h2>
  <movies-filter/>
<!--  loader instead of list-->
</template>

<script setup>
import {onMounted} from "vue";
import MoviesFilter from "@/components/MoviesFilter.vue";
import {useMoviesStore} from "@/stores/moviesStore.js";

const moviesStore = useMoviesStore();

onMounted(() => {
  moviesStore.getMovies();
})
</script>

<style scoped lang="scss">
.movies {
  &__title {
    font-size: 32px;
    line-height: 32px;
    font-weight: 500;
  }
}
</style>
