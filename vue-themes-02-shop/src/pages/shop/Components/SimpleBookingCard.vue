<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: false,
  },
  action: {
    type: Object,
    color: String,
    label: String,
    default: () => ({
      color: "success",
      label: "From / Night",
    }),
  },
});
</script>
<template>
  <div class="card">
    <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
      <RouterLink :to="route" class="d-block blur-shadow-image">
        <img
          :src="image"
          alt="img-blur-shadow"
          class="img-fluid border-radius-lg"
          loading="lazy"
        />
      </RouterLink>
    </div>
    <div class="card-body pt-3">
      <p class="text-dark mb-2 text-sm">
        {{ categories }}
      </p>
      <RouterLink :to="route">
        <h5 v-html="title"></h5>
      </RouterLink>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>
