<template>
  <div class="container-flud main-section about" id="page-news">
    <section id="section-1">
      <div class="content"></div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
  },
  mounted : () => {
    // scroll to top 
    document.querySelector('#section-1').scrollIntoView(true);
  }
};
</script>