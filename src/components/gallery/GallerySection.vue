<template>
  <div class="gallery-section">
    <h2>{{section.title}}</h2>
    <ul class="mdc-image-list mdc-image-list--masonry gallery-section-image-list">
      <gallery-card v-for="item in section.items" :key="item.id" :item="item"/>
    </ul>
  </div>
</template>

<script>
import GalleryCard from "./GalleryCard.vue";

export default {
  components: {
    GalleryCard,
  },
  props: {
    section: {
      type: Object,
      required: true
    }
  }
};
</script>
