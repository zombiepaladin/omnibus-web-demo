<script setup>
  import {ref} from 'vue'
  
  const fakeData = [{"date":"2025-09-27","temperatureC":7,"temperatureF":44,"summary":"Sweltering"},{"date":"2025-09-28","temperatureC":9,"temperatureF":48,"summary":"Warm"}];
  const data = ref(fakeData)

</script>

<template>
    <h1>Upcoming Weather...</h1>
    <div class='weather-forecast-wrapper'>
      <template v-for="day in data">
        <div class="weather-forecast-card">
            <div>{{ day.date }}</div>
            <h3>{{ day.temperatureF }}°F</h3>
            <p>{{ day.summary }}</p>
        </div>
      </template>
    </div>
</template>

<style scoped>
    .weather-forecast-wrapper {
        display: flex;
        flex-direction: row;
    }
    .weather-forecast-card {
        border: 1px solid black;
        margin: 2rem;
    }
</style>