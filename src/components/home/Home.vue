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
            <p class="deadline">Deadline&nbsp;: 20th of March 2019</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptate quisquam libero impedit atque ratione necessitatibus veniam provident, accusamus reprehenderit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, facere.</li>
            </ul>
            <p class="noted-text">If you wish to take part in the C++ Training Camp, sign-up before 15th of February 2019.</p>
          </div>
          <div class="sing-up">
            <p>
              <router-link :to="'singup'">
                <button class="mdc-button mdc-button--raised reg-button reg-button--section" tabindex="0">
                  <span>Sign up</span>
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
                  <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" id="org-by"></div>
                  <div class="demo-card__primary">
                    <h2 class="demo-card__title mdc-typography--headline6">Organized by</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="spo">
              <div class="mdc-card demo-card demo-card--hero">
                <div class="mdc-card__primary-action mdc-ripple-upgraded" tabindex="0">
                  <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" id="spo-by"></div>
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
    // particlesJS.load('particles-js', '../../js/particles/particlesjs-config.json', function() {
    //   console.log('particles.js loaded - callback');
    // });

    particlesJS('particles-js', 
    {
      "particles": {
        "number": {
          "value": 65,
          "density": {
            "enable": false,
            "value_area": 800
          }
        },
        "color": {
          "value": "#38bfae"
        },
        "shape": {
          "type": "triangle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 130,
          "color": "#38bfae",
          "opacity": 0.7,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
};
</script>