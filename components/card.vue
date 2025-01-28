<template>
  <div class="rounded-lg bg-white shadow-md space-y-2 cursor-pointer">
    <!-- Imagem -->
    <div class="relative w-full aspect-[5/3] rounded-md overflow-hidden">
      <img
        :src="data.photo"
        alt="Imagem do card"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>

    <div class="pb-2 pl-2 pr-2">
      <!-- Localização -->
      <div class="flex items-center gap-1 text-sm text-gray-500">
        <Icon class="size-5" name="oui:map-marker" />
        <p class="truncate">{{ data.location }}</p>
      </div>

      <!-- Nome -->
      <p class="text-lg font-semibold text-gray-800 truncate">
        {{ data.name }}
      </p>

      <!-- Data e Hora -->
      <div class="flex gap-4 text-sm text-gray-500">
        <div class="flex items-center gap-1">
          <Icon class="size-4" name="oui:calendar" />
          <p>{{ data.date }}</p>
        </div>
        <div class="flex items-center gap-1">
          <Icon class="size-4" name="oui:clock" />
          <p>{{ data.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = defineModel("data", {
  required: true,
});
</script>
