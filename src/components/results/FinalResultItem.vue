<template>
  <div class="result-item">
    <div class="result-item-inner">
      <div
        class="result-item-heading"
        :id="'p_'+details.hacker_id"
        v-on:click="showDropDown(details.hacker_id)"
      >
        <div class="result-item-heading-inner">
          <div class="rank">
            <div class="rank-inner">
              <div class="text">
                <span v-if="details.final_rank == null">ab</span>
                <span v-if="details.final_rank != null">#{{ details.final_rank }}</span>
              </div>
            </div>
          </div>
          <div class="name">
            <span>{{ details.first_name }} {{ details.last_name }}</span>
            <span class="hash-tag">{{ details.hash_tag }}</span>
          </div>
          <div class="school">
            <span>{{ details.school }}</span>
          </div>
          <div class="score">
            <span v-if="details.final_rank != null">{{ details.day_01_plus_02_score }}</span>
          </div>
        </div>
      </div>
      <div class="result-item-drop-down" :id="details.hacker_id">
        <div class="result-item-drop-down-inner">
          <div class="basic-details">
            <div class="basic-details-inner">
              <table class="basic-details-table">
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{{ details.first_name }} {{ details.last_name }}</td>
                </tr>
                <tr>
                  <td>School</td>
                  <td>:</td>
                  <td>{{ details.school }}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>:</td>
                  <td>{{ details.gender }}</td>
                </tr>
                <tr>
                  <td>NOI Portal User Name</td>
                  <td>:</td>
                  <td>{{ details.portal_username }}</td>
                </tr>
                <tr>
                  <td>Hacker Name</td>
                  <td>:</td>
                  <td>{{ details.hacker }}</td>
                </tr>
              </table>
              <div class="rounds-details-container" v-if="details.final_rank != null">
                <div class="heading-text"><i class="material-icons">label_important</i><span>Details of Rounds</span></div>
                <div class="rounds-details-table-container">
                  <table class="rounds-details-table">
                    <thead>
                      <tr>
                        <th>Round</th>
                        <th></th>
                        <th>Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Online qualifier round</td>
                        <td>:</td>
                        <td>{{ details.qualifier_score }}</td>
                      </tr>
                      <tr>
                        <td>Final round day 01</td>
                        <td>:</td>
                        <td>{{ details.day_01_score }}</td>
                      </tr>
                      <tr>
                        <td>Final round day 02</td>
                        <td>:</td>
                        <td>{{ details.day_02_score }}</td>
                      </tr>
                      <!-- <tr>
                        <td>Final round (day 01 + day + 02)</td>
                        <td>:</td>
                        <td>{{ details.day_01_plus_02_score }}</td>
                      </tr> -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="rank-details">
            <div class="rank-details-inner">
              <div class="rank-details-container">
                <div class="rank-details-container-inner">
                  <div class="rank-text" v-if="details.final_rank != null">#{{ details.final_rank }}</div>
                  <div class="rank-text" v-if="details.final_rank == null">ab</div>
                  <div class="rank-desc-text">
                    <div class="rank-desc-text-inner">
                      <div class="score-text">
                        <span
                          class="s"
                          v-if="details.final_rank != null"
                        >{{ details.day_01_plus_02_score }}</span>
                        <br>
                        <span class="s-desc" v-if="details.final_rank != null">Score</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as $ from "jquery";
import { MDCRipple } from "@material/ripple";

export default {
  props: {
    details: {
      type: Object,
      required: true
    }
  },
  mounted() {
    var elements = document.querySelectorAll(".result-item-heading");
    elements.forEach(el => {
      new MDCRipple(el);
    });
  },
  methods: {
    showDropDown: id => {
      var dropDownElements = document.querySelectorAll(
        ".result-item-drop-down"
      );
      $(`.result-item-heading:not(#p_${id})`).removeClass("active");
      dropDownElements.forEach(element => {
        if (element.id != id) {
          $(element).slideUp();
        }
      });
      $(`#${id}`).slideToggle();
      if ($(`#p_${id}`).hasClass("active")) {
        $(`#p_${id}`).removeClass("active");
      } else {
        $(`#p_${id}`).addClass("active");
      }
    }
  }
};
</script>
