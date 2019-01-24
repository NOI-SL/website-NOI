<template>
  <div class="container-flud main-section home" id="page-home">
    <section id="section-1">
      <!-- <div class="back"></div> -->
      <div class="content"></div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col" v-for="history in histories" :key="history.id">
          <history-card :history="history"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryCard from "./HistoryCard.vue";

export default {
  components: {
    HistoryCard
  },
  data() {
    return {
      histories: [
        {
          id: 0,
          class: "history-card_2016",
          year: 2016,
          subtitle: "Russia"
        },
        {
          id: 1,
          class: "history-card_2016",
          year: 2017,
          subtitle: "Russia"
        },
        {
          id: 2,
          class: "history-card_2016",
          year: 2018,
          subtitle: "Russia"
        }
      ]
    };
  }
};
</script>