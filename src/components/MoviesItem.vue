<template>
  <div class="movie-item">
    <!--    movie's cover-->
    <div class="movie-poster">
      <img class="movie-poster__img" :src="poster" alt="movie-poster">
    </div>

    <!--    movie's info-->
    <div class="movie-info">
      <router-link class="movie-info__title" :to="{ name: 'movie', params: { id } }">{{ title }}</router-link>
      <p class="movie-info__details">{{ year }}, {{ !!genres  ? genres.join(', ') : '' }}</p>
      <p class="movie-info__details">режиссёр: {{ !!directors ? directors.join(', ') : '' }}</p>
      <p class="movie-info__actors"><span class="movie-info__details">актёры:</span> {{ !!actors ? actors.join(', ') : '' }}</p>
      <p class="movie-info__desc" v-if="!!description">{{ description }}</p>

      <div v-if="!!collapse?.duration" class="movie-info__duration">
        <div class="movie-info__duration-inner">
          <span>{{ collapse.duration[0].replace('.', '') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number,
  title: String,
  description: String,
  year: Number,
  poster: String,
  actors: Array,
  genres: Array,
  directors: Array,
  collapse: Object,
});
</script>

<style scoped lang="scss">
.movie-item {
  display: flex;
  margin-bottom: 28px;
  background-color: #4D4747;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: all .5s ease;
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
  flex-grow: 1;
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

  &__duration {
    position: absolute;
    top: 32px;
    right: 0;
    background-color: #C4C4C4;

    span {
      position: relative;
      font-size: 12px;
      line-height: 12px;
      font-weight: 700;
      color: #000;
      text-transform: uppercase;
      padding-right: 28px;

      &::after {
        content: '';
        position: absolute;
        top: 48%;
        right: 0;
        transform: translateY(-50%);
        width: 16px;
        height: 18px;
        background-image: url("@/assets/img/movie.svg");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  &__duration-inner {
    position: relative;
    padding: 6px 28px 6px 18px;

    &::before {
      content: '';
      position: absolute;
      left: -27px;
      top: -5px;
      display: block;
      width: 30px;
      height: 45px;
      background-color: #4D4747;
      transform: rotate(11deg);
    }
  }
}
</style>
