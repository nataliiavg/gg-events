<template>
  <div class="bg-[#253431] p-4 flex flex-col md:flex-row gap-2" v-if="data">
    <Card v-for="event in data" :data="event" />
  </div>
</template>

<script setup>
const { data } = await useAsyncData(() => $fetch("/api/info"));

// const data = [
//   {
//     photo: "https://cdn2.thecatapi.com/images/ctHlkAH3L.jpg",
//     location: "National Stadium",
//     name: "Sonderlin Festival",
//     date: "12 Sept 2023",
//     time: "8:00 PM",
//   },
//   {
//     photo: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
//     location: "National Stadium",
//     name: "Sonderlin Festival",
//     date: "12 Sept 2023",
//     time: "8:00 PM",
//   },
// ];

</script>
