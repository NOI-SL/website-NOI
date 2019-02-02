<template>
  <div class="container-flud main-section about" id="page-noi-awards">
    <section id="section-1">
      <div class="back"></div>
      <div class="content">
        <div class="heading">
          <p class="heading-text">Awards</p>
          <p class="desc">Based on the performance at National Olympiad in Informatics competition, the following will be awarded.</p>
        </div>
        <div class="container">
          <div class="awards-detail-container">
            <div class="awards-detail-container-inner">
              <div class="award-cat-1">
                <div class="mdc-card demo-card demo-card--hero">
                  <div class="mdc-card__primary mdc-ripple-upgraded" tabindex="0">
                    <div class="demo-card__primary">
                      <h2 class="demo-card__title mdc-typography--headline6">Under 16</h2>
                      <!-- <h3 class="demo-card__subtitle mdc-typography--subtitle2">by Codearchery</h3> -->
                    </div>
                    <div class="demo-card__secondary mdc-typography--body2">
                      <ul>
                        <li><span class="material-icons">label</span> <span>Gold medal</span></li>
                        <li><span class="material-icons">label</span> <span>Silver medal</span></li>
                        <li><span class="material-icons">label</span> <span>Bronze medal</span></li>
                        <li><span class="material-icons">label</span> <span>Merit award</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="award-cat-2">
                <div class="mdc-card demo-card demo-card--hero">
                  <div class="mdc-card__primary mdc-ripple-upgraded" tabindex="0">
                    <div class="demo-card__primary">
                      <h2 class="demo-card__title mdc-typography--headline6">Under 20</h2>
                      <!-- <h3 class="demo-card__subtitle mdc-typography--subtitle2">by Codearchery</h3> -->
                    </div>
                    <div class="demo-card__secondary mdc-typography--body2">
                      <ul>
                        <li><span class="material-icons">label</span> <span>Gold medal</span></li>
                        <li><span class="material-icons">label</span> <span>Silver medal</span></li>
                        <li><span class="material-icons">label</span> <span>Bronze medal</span></li>
                        <li><span class="material-icons">label</span> <span>Merit award</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="spacial-awards-detail-container">
            <div class="spacial-awards-detail-container-inner">
              <div class="mdc-card demo-card demo-card--hero">
                <div class="mdc-card__primary mdc-ripple-upgraded" tabindex="0">
                  <div class="demo-card__primary">
                    <h2 class="demo-card__title mdc-typography--headline6">Special Awards</h2>
                    <!-- <h3 class="demo-card__subtitle mdc-typography--subtitle2">by Codearchery</h3> -->
                  </div>
                  <div class="demo-card__secondary mdc-typography--body2">
                    <ul>
                      <li><span class="material-icons">label</span> <span>Best coder</span></li>
                      <li><span class="material-icons">label</span> <span>Best girl coder</span></li>
                      <li><span class="material-icons">label</span> <span>Best performing school</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="team-select">
            <div class="team-select-inner">
              <div class="mdc-card demo-card demo-card--hero">
                <div class="mdc-card__primary mdc-ripple-upgraded" tabindex="0">
                  <div class="demo-card__primary">
                    <h2 class="demo-card__title mdc-typography--headline6">National team</h2>
                    <!-- <h3 class="demo-card__subtitle mdc-typography--subtitle2">by Codearchery</h3> -->
                  </div>
                  <div class="demo-card__secondary mdc-typography--body2">
                    The four students who get selected to the National team will be provided a <b>fully sponsored trip</b> to the <a target="_blank" href="http://www.ioi2019.az/" style="text-decoration: underline">Azerbaijan</a>.
                  </div>
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
export default {
  components: {
  },
  mounted : () => {
    // scroll to top 
    document.querySelector('#section-1').scrollIntoView(true);
  }
};
</script>