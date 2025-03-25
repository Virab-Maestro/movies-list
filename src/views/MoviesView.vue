<template>
  Movies list
</template>

<script setup>
import {onMounted} from "vue";
import {useMoviesStore} from "@/stores/moviesStore.js";

const moviesStore = useMoviesStore();

onMounted(() => {
  moviesStore.getMovies();
})
</script>

<style scoped></style>
