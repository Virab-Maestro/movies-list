<template>
  <div class="movie-item">
    <div class="movie-poster">
      <img class="movie-poster__img" :src="poster" alt="movie-poster">
    </div>

    <div class="movie-info">
      <a class="movie-info-title" href="#">{{ title }}</a>
      <p class="movie-info-details">{{ year }}, {{ genres !== null ? genres.join(', ') : '' }}</p>
      <p class="movie-info-details">режиссёр: {{ directors !== null ? directors.join(', ') : '' }}</p>
      <p class="movie-info-actors"><span>актёры:</span> {{ actors !== null ? actors.join(', ') : '' }}</p>
      <p class="movie-info-desc">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  id: String,
  title: String,
  description: String,
  year: Number,
  poster: String,
  actors: Array,
  genres: Array,
  directors: Array,
});
</script>

<style scoped lang="scss">
.movie-item {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 28px;
  background-color: #4D4747;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.movie-poster {
  height: 100%;
  background-color: #C4C4C4;
  padding: 0 28px;

  &__img {
    width: 112px;
    height: 168px;
  }
}

.movie-info {
  position: relative;
  padding: 32px 32px 32px 24px;
}
</style>
