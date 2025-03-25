<template>
  <div class="filter">
    <div class="filter-item">
      <input id="by-title" class="filter-input" type="checkbox" v-model="byTitle" @change="onByTitle">
      <label class="filter-label" for="by-title">Отсортировать по названию</label>
    </div>


    <div class="filter-item">
      <input id="by-year" class="filter-input" type="checkbox" v-model="byYear" @change="onByYear">
      <label class="filter-label" for="by-year">Отсортировать по году</label>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const byTitle = ref(),
  byYear = ref();

function onByTitle() {
  if(byYear.value) byYear.value = false;
  //filter
}
function onByYear() {
  if(byTitle.value) byTitle.value = false;
  //filter
}
</script>

<style scoped lang="scss">
.filter{
  position: relative;
  padding: 16px 0;
  display: flex;
  align-items: center;
  gap: 32px;

  &-item{
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &-label{
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    color: #C4C4C4;
    cursor: pointer;
  }

  &-input {
    appearance: none;
    width: 15px;
    height: 15px;
    background: transparent;
    border: 1px solid #C4C4C4;
    cursor: pointer;

    &:checked {
      background-image: url("../assets/img/checkbox.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-color: rgba(255, 82, 82, .98);
      border: none;
    }
  }

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
}
</style>
