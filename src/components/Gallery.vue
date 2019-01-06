<template>
  <div class="container main-section gallery">
    <h1>Gallery</h1>
    <gallery-section v-for="section in sections" :key="section.id" :section="section"/>
  </div>
</template>

<script>
import GallerySection from "./GallerySection.vue";

export default {
  components: {
    GallerySection
  },
  data() {
    return {
      sections: [
        {
          id: 0,
          title: "IOI 2018",
          items: [
            {
              id: 0,
              src:
                "https://lh3.googleusercontent.com/kXGMbsozCjZnC-QaCdIDU4kmrAPanFwbc9mWnCFXTk5qMEahO-KiLzfQRVWDEXZ9VF5Moc6VjHbA-Zwa7vfrard-hAys3_B-GLbaDbVqjPtMU4B1CS-lU75XnlBNM3j5fqeGm5MD4A=w2400",
              caption: "Russia"
            },
            {
              id: 1,
              src:
                "https://lh3.googleusercontent.com/o4QV2zNs-Il8MauaQc_Oy0rbF0cBJcoQUkDJ-HqtKT0Az9f-IlIFbbI7kO1MPsRMp-Pof2DqX-KnTKXz1OajMaUS1rKev44a15RqmpyJKiF28DggPA4S8EgkH-84Jji94R_4Nf6hiA=w2400",
              caption: "Russia"
            },
            {
              id: 2,
              src:
                "https://lh3.googleusercontent.com/IVjg8SiQMtA3IkU0aqOhGqwSbNiffIPptR5TyEso_9aE9kBOx0WalwatWKBjXL4KVQJkwajsD8lO8zZekRtuLwTebMwYoFcoubWM_CSVUSHqXGZ3j2AGHp7joWP-gp8mtscOX70h1g=w2400",
              caption: "Russia"
            },
            {
              id: 3,
              src:
                "https://lh3.googleusercontent.com/Byl1DmduqVJTRbnFT4EDxVoofsfWikGmsdPnVwZrv8-IDM_8bkJRZ4qo8g6EqBS3Abxib6KYSz5Hud1R_lup8sGLioCpb5Js7fgadxmXIDhk_UWQBRuGDsdmvLG_YhgQUFAFnGspig=w2400",
              caption: "Russia"
            },
            {
              id: 4,
              src:
                "https://lh3.googleusercontent.com/cLNydi463fZ1cNB9tSvhEIsWojIbCcQQJmgmx6PhnXnJAi0NJ8r6JIhKK7dAUcFYcODc8NkFfn7SWl6BXp-1sQJIB0n0sAXu28zfgMWwoWBu9fNSPF9dZZR8rZyOt5uaKVejBuFJRg=w2400",
              caption: "Russia"
            },
            {
              id: 5,
              src:
                "https://lh3.googleusercontent.com/y7VJdqtr5Fz9JOlkJ-AJJ9nXdUGgkngy0J-qGyd3GK2N7AOkMCr0vKJWLhlWzuFB2qmwG5fMbfucSCOouPTWbl7Pux63VUC1zTNNymctQoUZSF1qsTLuTrisM6hh3bu6Zp_2Rra5Qg=w2400",
              caption: "Russia"
            }
          ]
        },
        {
          id: 1,
          title: "IOI 2017",
          items: [
            {
              id: 0,
              src:
                "https://lh3.googleusercontent.com/cXc4sL8JUJ9isKatZEFi9YuwMcb26ICd2G2dkPtKUUupmBi9acnp54_riVh_w60qbr8T4ulExf-8lUYvETKM9LW87W7Bd68v5e6FzdGYToIaYAYJnzLoo2uGCjdIBY2jZv2Sf03Vew=w2400",
              caption: "Russia"
            },
            {
              id: 1,
              src:
                "https://lh3.googleusercontent.com/SIU4yPkKUr1GDZbuZYLhK4O__gIbPCHXXY5o8wf04eXJyzQW-a06FzLWVx6-nvrcVmzjrCOafZJ9eqThRXoJqkk0F47_aoPRMz0ffKN5H8fRLA1jbYE3VrHBsNHMKoeNOcSuU14Z5A=w2400",
              caption: "Russia"
            },
            {
              id: 2,
              src:
                "https://lh3.googleusercontent.com/Q4XBvrkkMHVDDZXh_QC616RzzUn3oujtDD_sE3M9P0jqzJGiPQBeAOcLihtDZDWSn87dwrhkDWLPSUDnA7OV8syhYrsH27VEtcYv2h95h--woYpuSWUNPwurOGKBAeAXorxXYFC4YA=w2400",
              caption: "Russia"
            }
          ]
        }
      ]
    };
  }
};
</script> 