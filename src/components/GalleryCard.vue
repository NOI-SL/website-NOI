<template>
  <li class="mdc-image-list__item">
    <img class="mdc-image-list__image" :src="item.src">
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
