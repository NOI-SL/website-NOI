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
                <li>The National Olympiad in Informatics is the Sri Lanka’s leading computing competition for the secondary school students. At NOI, contestants have to write programs in C++, Pascal or Java to solve a set of problems within a specified time limit.</li>
                <li>
                  The National team to represent Sri Lanka at the International Olympiad in Informatics - 2019, which is to be held in Azerbaijan will be selected through the
                  <i>'National Olympiad in Informatics 2019'</i> program.
                </li>
              </ul>
              <br>
              <!-- <ul class="heading-desc-text">
                <li>
                  <b>Notice:</b> Registrations for the C++ Training camp are closed. You may still sign-up for the NOI 2019 contest.
                </li>
              </ul>-->
            </div>
            <div class="mdc-card demo-card announcements-card">
              <div class="mdc-card__primary mdc-ripple-upgraded" tabindex="0">
                <div class="demo-card__primary ripple">
                  <h2 class="demo-card__title mdc-typography--headline6">Announcements</h2>
                  <!-- <h3 class="demo-card__subtitle mdc-typography--subtitle2">by Kurt Wagner</h3> -->
                </div>
                <div class="demo-card__secondary mdc-typography--body2">
                  <ul class="announcements-list">
                    <li
                      class="announcements-list-item"
                    >Registrations have closed. Keep in touch with your mail inbox.</li>
                  </ul>
                </div>
              </div>
              <!-- <div class="mdc-card__actions">
                <div class="mdc-card__action-buttons">
                  <a target="_blank">
                    <button class="mdc-button mdc-button--raised mdc-ripple-upgraded">Read</button>
                  </a>
                </div>
              </div>-->
            </div>
          </div>
          <div class="pet-image-container">
            <div class="image">
              <img src="../../img/NOI-pet.svg" class="img-responsive" alt>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-2">
      <div class="back"></div>
      <div class="content">
        <div class="heading">
          <p class="heading-text">International Olympiad in Informatics</p>
          <div class="desc">
            <p class="desc-text">
              The IOI is one of five international science olympiads. The primary goal of the IOI is to stimulate interest in informatics (computing science) and information technology.
              Another important goal is to bring together exceptionally talented pupils from various countries and to have them share scientific and cultural experiences.
              <br>Sri Lanka has taken part in this competition since 1992. IOI 2018 was held in Japan with the participation of 335 participants from 87 countries around the world.
              <br>
              <br>IOI 2019 is to be held next year in Azerbaijan (
              <a
                href="https://www.ioi2019.az"
                target="new"
              >www.ioi2019.az</a>).
            </p>
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
            <p
              class="heading-desc"
            >National Olympiad in Informatics program registrations have closed.</p>
          </div>
          <div class="desc">
            <p
              class="deadline"
            >NOI contest date will be informed via an email to registered students</p>
            <ul>
              <li class="closed">
                <label>
                  For more information regarding the program, please see "<router-link :to="'noi'"><span style="color: white;">NOI 2019</span></router-link>" page.
                </label>
              </li>
            </ul>
          </div>
          <div class="sign-up">
            <p>
              <a target="_blank" href="https://portal.noi.lk/">
                <button
                  class="mdc-button mdc-button--raised reg-button reg-button--section"
                  tabindex="0"
                  style="margin-bottom:5px;"
                >
                  <span>NOI Portal</span>
                </button>
              </a>
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
            <p
              class="desc-text"
            >National Olympiad in Informatics program is organized by the ACM student Chapter of UCSC, with collaboration of IOI alumni of Sri Lanka</p>
            <p class="desc-text">NOI 2019 program is powered by oDoc</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HistoryCard from "./HistoryCard.vue";
import Particles from "../../js/particles/particles.min.js";

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
  mounted: () => {
    // particles
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 65,
          density: {
            enable: false,
            value_area: 800
          }
        },
        color: {
          value: "#38bfae"
        },
        shape: {
          type: "triangle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 130,
          color: "#38bfae",
          opacity: 0.7,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "repulse"
          },
          onclick: {
            enable: false,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });

    // scroll to top
    document.querySelector("#section-1").scrollIntoView(true);
  }
};
</script>