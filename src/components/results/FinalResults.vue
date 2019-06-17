<template>
  <div class="container-flud main-section" id="final-results">
    <section class="section-1">
      <div class="content">
        <div class="heading-container">
          <p
            class="heading-text"
          >Results of Final Round for the National Olympiad in Informatics 2019</p>
        </div>
        <div class="container description-container">
          <p
            class="description text-center"
          >We're glad to release the official results of the Final Round for NOI 2019.</p>
          <br>
        </div>
      </div>
    </section>
    <section class="section-2">
      <div class="container-fluid content">
        <div class="container mdc-elevation--z2 results-container">
          <div class="heading-container">
            <p class="heading">Results</p>
          </div>
          <div id="loading-container">
            <div role="progressbar" class="mdc-linear-progress mdc-linear-progress--indeterminate">
              <div class="mdc-linear-progress__buffering-dots"></div>
              <div class="mdc-linear-progress__buffer"></div>
              <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                <span class="mdc-linear-progress__bar-inner"></span>
              </div>
              <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                <span class="mdc-linear-progress__bar-inner"></span>
              </div>
            </div>
          </div>
          <div id="result___container">
            <div class="result-item-container">
              <final-result-item
                v-for="detail in details"
                v-bind:key="detail.hacker_id"
                :details="detail"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as $ from "jquery";
import FinalResultItem from "./FinalResultItem.vue"

export default {
  components: {
    FinalResultItem
  },
  mounted() {
    $.getJSON("./results/final_results.json", response => {
      this.details = response;
      $('#loading-container').fadeOut(() => {
        $('#result___container').fadeIn()
      })
    });
  },
  data() {
      return {details: []}
  }
};
</script>
