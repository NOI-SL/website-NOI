<template>
  <div class="container-flud main-section home" id="page-home">
    <section id="section-1">
      <div class="back">
        <div id="particles-js"></div>
      </div>
      <div class="content">
        <div class="content-inner">
          <div class="heading-container">
            <div class="heading">
              <p class="heading-text">National Olympiad&nbsp;in Informatics</p>
            </div>
            <div class="heading-desc">
              <ul class="heading-desc-text">
                <li>The National Olympiad in Informatics is an annual programming contest for secondary school students. The national team for the International Olympiad in Informatics 2019 held in Azerbaijan is selected through this program. Secondary school students under 20 years of age by 01st of July 2019 are eligible to take part in this contest.</li>
              </ul>
            </div>
          </div>
          <div class="pet-image-container">
            <div class="image">
              <img src="../../img/NOI-pet.svg" class="img-responsive" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-2">
      <div class="back"></div>
      <div class="content">
        <div class="heading">
          <p class="heading-text">
            International Olympiad in Informatics&nbsp;?
          </p>
          <div class="desc">
            <p class="desc-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias labore fuga quae excepturi eos nemo voluptate laudantium nesciunt doloremque possimus tempore repudiandae rem adipisci aliquam ipsum, quidem necessitatibus qui nulla. Iste harum quam dolorem! Nesciunt libero reprehenderit inventore aliquid obcaecati error itaque autem nobis porro maxime, perspiciatis quos fugiat sunt aut ipsa tempore voluptas labore possimus consequatur praesentium hic soluta? Enim voluptatibus porro impedit.</p>
          </div>
        </div>
        <div class="images">
          <div class="container">
              <div class="img-row">
                <div class="img-col" v-for="history in histories" :key="history.id">
                  <history-card :history="history"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    <section id="section-3">
      <div class="back"></div>
      <div class="content">
        <div class="content-inner">
          <div class="heading">
            <p class="heading-text">Registrations</p>
            <p class="heading-desc">Sign up for the National Olympiad in Informatics program.</p>
          </div>
          <div class="desc">
            <p class="deadline">Deadline&nbsp;: 15th of March 2019</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptate quisquam libero impedit atque ratione necessitatibus veniam provident, accusamus reprehenderit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, facere.</li>
            </ul>
            <p class="noted-text">*note - if you wish to take part in the C++ Training Camp, sign-up before 15th of February 2019.</p>
          </div>
          <div class="sing-up">
            <p>
              <router-link :to="'singup'">
                <button class="mdc-button mdc-button--raised reg-button reg-button--section" tabindex="0">
                  <span>Sing up</span>
                </button>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="section-4">
      <div class="content">
        <div class="container">
          <div class="content-inner">
            <div class="org">
              <div class="mdc-card demo-card demo-card--hero">
                <div class="mdc-card__primary-action mdc-ripple-upgraded" tabindex="0">
                  <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url('../../img/acm_ucsc.png');"></div>
                  <div class="demo-card__primary">
                    <h2 class="demo-card__title mdc-typography--headline6">Organized by</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="spo">
              <div class="mdc-card demo-card demo-card--hero">
                <div class="mdc-card__primary-action mdc-ripple-upgraded" tabindex="0">
                  <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url('../../img/oDoc-logo.png');"></div>
                  <div class="demo-card__primary">
                    <h2 class="demo-card__title mdc-typography--headline6">Sponsored by</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="desc">
            <p class="desc-text">National Olympiad in Informatics program is organized by the ACM student Chapter of UCSC, with collaboration of IOI alumni of Sri Lanka.</p>
            <p class="desc-text">oDoc is the sole sponsor for IOI 2019 program.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import HistoryCard from "./HistoryCard.vue";
import Particles from "../../js/particles/particles.min.js"

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
          subtitle: "Iran"
        },
        {
          id: 2,
          class: "history-card_2016",
          year: 2018,
          subtitle: "Japan"
        }
      ]
    };
  },
  mounted : () => {
    particlesJS.load('particles-js', '../../js/particles/particlesjs-config.json', function() {
      console.log('particles.js loaded - callback');
    });
  }
};
</script>