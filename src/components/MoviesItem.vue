<template>
  <div class="movie-item">
    <div class="movie-poster">
      <img class="movie-poster__img" :src="poster" alt="movie-poster">
    </div>

    <div class="movie-info">
      <a class="movie-info__title" href="#">{{ title }}</a>
      <p class="movie-info__details">{{ year }}, {{ genres !== null ? genres.join(', ') : '' }}</p>
      <p class="movie-info__details">режиссёр: {{ directors !== null ? directors.join(', ') : '' }}</p>
      <p class="movie-info__actors"><span class="movie-info__details">актёры:</span> {{ actors !== null ? actors.join(', ') : '' }}</p>
      <p class="movie-info__desc" v-if="!!description">{{ description }}</p>
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
  gap: 24px;
  margin-bottom: 28px;
  background-color: #4D4747;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: all .5s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.35);
  }
}

.movie-poster {
  position: relative;
  min-width: 168px;
  min-height: 100%;
  background-color: #C4C4C4;
  overflow-y: hidden;

  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 112px;
    height: 168px;
  }
}

.movie-info {
  position: relative;
  padding: 32px 32px 32px 24px;

  &__title {
    display: inline-block;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 12px;
  }

  &__details, &__actors span {
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    color: #988F8F;
    text-transform: uppercase;
  }
  &__details {
    margin-bottom: 8px;
  }
  &__actors span {
    margin-right: 5px;
  }

  &__actors {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: #E5E5E5;
  }

  &__desc {
    margin-top: 14px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }

}
</style>
