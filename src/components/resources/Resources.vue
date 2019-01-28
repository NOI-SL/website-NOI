<template>
  <div class="container-flud main-section about" id="resources">
    <section id="section-1">
      <div class="back"></div>
      <div class="content">  
        <div class="heading-content">
          <div class="heading-content-inner">
            <p class="heading">Resources</p>
            <p class="desc">Use the following resources to prepare for the National Olympiad in Informatics contest</p>
          </div>
        </div>
        <div class="resources-content">
          <div class="resources-content-inner">
            <ul>
              <li>
                <div class="mdc-card demo-card">
                  <div class="mdc-card__primary mdc-ripple-upgraded" tabindex="0">
                    <div class="demo-card__primary">
                      <h2 class="demo-card__title mdc-typography--headline6">Competitive Programmers’ handbook</h2>
                      <!-- <h3 class="demo-card__subtitle mdc-typography--subtitle2">by Kurt Wagner</h3> -->
                    </div>
                    <div class="demo-card__secondary mdc-typography--body2">
                       	Competitive Programmer's Handbook is a free online book whose purpose is to give the reader a thorough introduction to competitive programming.
                    </div>
                  </div>
                  <div class="mdc-card__actions">
                    <div class="mdc-card__action-buttons">
                      <a v-bind:href="item['competitive-programming-hand-book'].loc"><button class="mdc-button mdc-button--raised mdc-ripple-upgraded">Read</button></a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="mdc-card demo-card">
                  <div class="mdc-card__primary mdc-ripple-upgraded" tabindex="0">
                    <div class="demo-card__primary">
                      <h2 class="demo-card__title mdc-typography--headline6">Introduction to Algorithms</h2>
                      <h3 class="demo-card__subtitle mdc-typography--subtitle2">by CLRS</h3>
                    </div>
                    <div class="demo-card__secondary mdc-typography--body2">
                       	This is an advanced textbook.
                    </div>
                  </div>
                  <div class="mdc-card__actions">
                    <div class="mdc-card__action-buttons">
                      <a href=""><button class="mdc-button mdc-button--raised mdc-ripple-upgraded">amazon link</button></a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="mdc-card demo-card">
                  <div class="mdc-card__primary mdc-ripple-upgraded" tabindex="0">
                    <div class="demo-card__primary">
                      <h2 class="demo-card__title mdc-typography--headline6">IOI Syllabus</h2>
                      <!-- <h3 class="demo-card__subtitle mdc-typography--subtitle2">by CLRS</h3> -->
                    </div>
                    <!-- <div class="demo-card__secondary mdc-typography--body2">
                       	This is an advanced textbook.
                    </div> -->
                  </div>
                  <div class="mdc-card__actions">
                    <div class="mdc-card__action-buttons">
                      <a v-bind:href="item['ioi-syllabus'].loc"><button class="mdc-button mdc-button--raised mdc-ripple-upgraded">read</button></a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="mdc-card demo-card">
                  <div class="mdc-card__primary mdc-ripple-upgraded" tabindex="0">
                    <div class="demo-card__primary">
                      <h2 class="demo-card__title mdc-typography--headline6">IOI past papers and solutions</h2>
                      <!-- <h3 class="demo-card__subtitle mdc-typography--subtitle2">by CLRS</h3> -->
                    </div>
                    <!-- <div class="demo-card__secondary mdc-typography--body2">
                       	This is an advanced textbook.
                    </div> -->
                  </div>
                  <div class="mdc-card__actions">
                    <div class="mdc-card__action-buttons">
                      <a href="">
                        <button class="demo-button mdc-button mdc-button--raised mdc-ripple-upgraded">
                          <i class="material-icons mdc-button__icon">cloud_download</i><span class="mdc-button__label">download</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="section-2">
      <div class="back"></div>
      <div class="content">
        <div class="video-container">
          <div class="mdc-card demo-card demo-card--hero">
            <div class="mdc-card__primary-action mdc-ripple-upgraded" tabindex="0">
              <div class="mdc-card__media mdc-card__media--16-9 demo-card__media">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/zl203Xj26AI?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="demo-card__primary">
                <h2 class="demo-card__title mdc-typography--headline6">C++ Animated Training Videos</h2>
                <h3 class="demo-card__subtitle mdc-typography--subtitle2">by Codearchery</h3>
              </div>
              <div class="demo-card__secondary mdc-typography--body2">
                This Video series is for those who want to easily understand all the concept of C++ and those who hates to watch only a Screenshot Video. I've used White Board Animation to Explain each concept Innovatively.
              </div>
            </div>
            <div class="mdc-card__actions">
              <div class="mdc-card__action-buttons">
                <a target="_blank" href="https://www.youtube.com/playlist?list=PLrKBFf87Cy9BVBAZ1Y-6Olzz0KTU4Qw6L"><button class="mdc-button mdc-button--raised mdc-ripple-upgraded">youtube link</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-3">
      <div class="content">
        <div class="platforms">
          <div class="platform-items">
            <div class="mdc-card demo-card demo-card--hero">
              <div class="mdc-card__primary-action mdc-ripple-upgraded" tabindex="0">
                <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url('../../img/platforms/hackerrank-.png');"></div>
                <div class="demo-card__primary">
                  <h2 class="demo-card__title mdc-typography--headline6">Hackerrank platform</h2>
                  <!-- <h3 class="demo-card__subtitle mdc-typography--subtitle2">by Codearchery</h3> -->
                </div>
                <!-- <div class="demo-card__secondary mdc-typography--body2">
                </div> -->
              </div>
              <div class="mdc-card__actions">
                <div class="mdc-card__action-buttons">
                  <a target="_blank" href=""><button class="mdc-button mdc-button--raised mdc-ripple-upgraded">Website</button></a>
                </div>
              </div>
            </div>
          </div>
          <div class="platform-items">
            <div class="mdc-card demo-card demo-card--hero">
              <div class="mdc-card__primary-action mdc-ripple-upgraded" tabindex="0">
                <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url('../../img/platforms/codeforces-.png');"></div>
                <div class="demo-card__primary">
                  <h2 class="demo-card__title mdc-typography--headline6">Codeforces platform</h2>
                  <!-- <h3 class="demo-card__subtitle mdc-typography--subtitle2">by Codearchery</h3> -->
                </div>
                <!-- <div class="demo-card__secondary mdc-typography--body2">
                </div> -->
              </div>
              <div class="mdc-card__actions">
                <div class="mdc-card__action-buttons">
                  <a target="_blank" href=""><button class="mdc-button mdc-button--raised mdc-ripple-upgraded">Website</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {MDCRipple} from '@material/ripple';

export default {
  components: {
  },
  data () {
    return {
      item: {
        'competitive-programming-hand-book' : {
          title: 'competitive-programming-hand-book', 
          loc: require('../../resources_documents/competitive-programming-hand-book/competitive-programming-hand-book.pdf')
        },
        'ioi-syllabus' : {
          title: 'ioi-syllabus',
          loc: require('../../resources_documents/ioi-syllabus/ioi-syllabus.pdf')
        }
      }
    };
  },
  mounted : () => {
    const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

    
  }
};
</script>