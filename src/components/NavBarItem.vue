<template>
  <button class="mdc-tab nav-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
    <span class="mdc-tab__content">
      <span class="mdc-tab__icon material-icons" aria-hidden="true">{{ nav.icon }}</span>
      <span class="mdc-tab__text-label">{{ nav.text }}</span>
    </span>
    <span class="mdc-tab-indicator mdc-tab-indicator--active">
      <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
    </span>
    <span class="mdc-tab__ripple"></span>
  </button>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.nav-tab {
  height: 64px;
}
</style>