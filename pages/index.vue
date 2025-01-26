<template>
  <Header/>

  <div class="bg-[#253431] p-4 flex flex-col md:flex-row gap-2">
    <Card v-for="event in events" :data="event" />
  </div>
</template>

<script setup lang="ts">
const events = [
  {
    photo: "https://cdn2.thecatapi.com/images/ctHlkAH3L.jpg",
    location: "National Stadium",
    name: "Sonderlin Festival",
    date: "12 Sept 2023",
    time: "8:00 PM",
  },
  {
    photo: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    location: "National Stadium",
    name: "Sonderlin Festival",
    date: "12 Sept 2023",
    time: "8:00 PM",
  },
];
</script>
