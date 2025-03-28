<template>
  <div class="filter">
    <!--    filter by movies title-->
    <div class="filter-item">
      <input id="by-title" class="filter-input" type="checkbox" v-model="byTitle" @change="onByTitle">
      <label class="filter-label" for="by-title">Отсортировать по названию</label>
    </div>

    <!--    filter by movies year-->
    <div class="filter-item">
      <input id="by-year" class="filter-input" type="checkbox" v-model="byYear" @change="onByYear">
      <label class="filter-label" for="by-year">Отсортировать по году</label>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const emits = defineEmits(["filter"]);

const byTitle = ref(),
  byYear = ref();

function onByTitle() {
  if(byTitle.value) {
    byYear.value = false;
    emits("filter", "title")
  }else {
    emits("filter", null) //clears the list when null
  }
}
function onByYear() {
  if(byYear.value) {
    byTitle.value = false;
    emits("filter", "year")
  }else {
    emits("filter", null) //clears the list when null
  }
}
</script>

<style scoped lang="scss">
.filter{
  position: relative;
  padding: 16px 0;
  margin-bottom: 40px;
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
