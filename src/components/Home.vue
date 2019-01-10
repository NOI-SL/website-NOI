<template>
  <div class="container main-section home">
    <div class="row">
      <div class="col" v-for="history in histories" :key="history.id">
        <history-card :history="history"/>
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