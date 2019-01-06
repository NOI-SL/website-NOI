<template>
  <div class="mdc-card mdc-card--outlined history-card">
    <div
      class="mdc-card__media mdc-card__media--square"
      :class="{'history-card_2016': history.year == 2016,'history-card_2017': history.year == 2017,'history-card_2018': history.year == 2018}"
    ></div>
    <div class="history-card_content">
      <h2>IOI {{history.year}}</h2>
      <p>{{history.subtitle}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    history: {
        type: Object,
        required: true
    }
  }
};
</script>
