<template>
  <div
    class="result-item"
    :class="{'not-completed': (!isCompleted), 'desabled': (details.score <= 100)}"
    v-if="(isAbove100)? (details.score > 100): (details.score <= 100)"
  >
    <div class="result-item-inner">
      <div class="result-item-heading" :id="'p_'+details.hacker_id" v-on:click="showDropDown(details.hacker_id)">
        <div class="result-item-heading-inner">
          <div class="rank">
            <div class="rank-inner">
              <div class="text">
                <span>#{{ details.rank }}</span>
              </div>
            </div>
          </div>
          <div class="name">
            <span v-if="isCompleted">{{ details.first_name }} {{ details.last_name }}</span>
            <span v-if="!isCompleted">{{ details.hacker_name }}</span>
          </div>
          <div class="school">
            <span>{{ details.school }}</span>
          </div>
          <div class="score">
            <span>{{ details.score }}</span>
          </div>
        </div>
      </div>
      <div class="result-item-drop-down" :id="details.hacker_id">
        <div class="result-item-drop-down-inner">
          <div class="basic-details">
            <div class="basic-details-inner">
              <p v-if="!isCompleted" class="warning-text">*Please update your profile.</p>
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
                  <td>{{ details.username }}</td>
                </tr>
                <tr>
                  <td>Hacker Name</td>
                  <td>:</td>
                  <td>{{ details.hacker_name }}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="rank-details">
            <div class="rank-details-inner">
              <div class="rank-details-container">
                <div class="rank-details-container-inner">
                  <div class="rank-text">#{{ details.rank }}</div>
                  <div class="rank-desc-text">
                    <div class="rank-desc-text-inner">
                      <div class="score-text">
                        <span class="s">{{ details.score }}</span>
                        <br>
                        <span class="s-desc">Score</span>
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
    isCompleted: Boolean,
    isAbove100: Boolean,
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
      if ($(`#p_${id}`).hasClass('active')) {
        $(`#p_${id}`).removeClass('active');
      }else {
        $(`#p_${id}`).addClass('active');
      }
      
    }
  }
};
</script>
