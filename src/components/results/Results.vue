<template>
  <div class="container-flud main-section" id="results">
    <section class="section-1">
      <div class="content">
        <div class="heading-container">
          <p
            class="heading-text"
          >Results of Online Qualifier Round for the National Olympiad in Informatics 2019</p>
        </div>
        <div class="container description-container">
          <p
            class="description text-center"
          >We're glad to release the official results of the Online Qualifier Round for NOI 2019.</p>
          <br>
          <div class="description--t2">
            <div class="des-item">
              <div class="des-item-inner">
                <div class="icon-container">
                  <i class="material-icons">label_important</i>
                </div>
                <div class="text-container">
                  The entries marked in
                  <span class="highlight">RED</span> did not have their
                  <span class="highlight">usernames</span> updated through the NOI Portal.
                  <div class="text-container-inner-text">
                    If you are one of them, add the hackerrank username to your
                    <a
                      target="_blank"
                      href="https://bit.ly/2w0NZRy"
                    >
                      <button class="mdc-button mdc-button--raised">NOI Portal Profile</button>
                    </a>
                    <b>ON OR BEFORE 25TH OF MAY</b>, or you <b>will NOT be allowed</b> to proceed with the program.
                  </div>
                </div>
              </div>
            </div>

            <div class="des-item">
              <div class="des-item-inner">
                <div class="icon-container">
                  <i class="material-icons">label_important</i>
                </div>
                <div
                  class="text-container"
                >Due to the unexpected incidents that delayed the original NOI program, it has been decided to perform the National Team Selection for IOI 2019 through NOI 2019 final round results.</div>
              </div>
            </div>

            <div class="des-item">
              <div class="des-item-inner">
                <div class="icon-container">
                  <i class="material-icons">label_important</i>
                </div>
                <div
                  class="text-container"
                >Therefore, all contestants (with NOI Portal profiles) who scored more than 100 are hereby qualified to compete in the NOI 2019 final round.</div>
              </div>
            </div>

            <div class="des-item">
              <div class="des-item-inner">
                <div class="icon-container">
                  <i class="material-icons">label_important</i>
                </div>
                <div
                  class="text-container"
                >The contestants who are qualified will be informed in detail about the final round of NOI 2019.</div>
              </div>
            </div>
          </div>
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
            <div class="subheading-container">
              <p>Contestants who scored above 100</p>
            </div>

            <div class="result-item-container">
              <result-item
                v-for="detail in details"
                v-bind:key="detail.hacker_id"
                :isAbove100="true"
                :details="detail"
                :isCompleted="detail.isCompleted"
              />
            </div>

            <br><hr class="devider"><br>

            <div class="result-item-container">
              <result-item
                v-for="detail in details"
                v-bind:key="detail.hacker_id"
                :isAbove100="false"
                :details="detail"
                :isCompleted="detail.isCompleted"
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
import ResultItem from "./ResultItem.vue"

export default {
  components: {
    ResultItem
  },
  mounted() {
    $.getJSON("./results/results.json", response => {
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
