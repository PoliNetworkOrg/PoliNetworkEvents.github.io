<template>
  <div>
    <!-- Page Content -->
    <div class="container3">
      <!-- Jumbotron Header -->
      <header
        class="my-4 testoCentrale"
        style="
          max-width: 100%;
          border: none;
          margin-top: calc(2rem + 2vw) !important;
          margin-bottom: calc(1rem + 2vw) !important;
          padding-bottom: 0px;
          padding-top: 0px;
        "
      >
        <div style="text-align: center">
          <h2 class="text_big">
            <span>{{ $t("Assoc party") }} </span>
          </h2>
          <h5 style="font-size: calc(0.5px + 1.05rem + 0.5vw)">
            <a :href="'https://polinetwork.github.io/' + $i18n.locale">
              by PoliNetwork
            </a>
          </h5>
          <div></div>

          <br />

          <div class="container8">
            <div class="container6">
              <p class="text_small">
                <span>
                  {{
                    $t(
                      "PoliNetwork vuole festeggiare con voi l'avvenuta trasformazione in associazione studentesca!"
                    )
                  }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
    <!-- /.container -->
    <div v-if="expired == false">
      <hr />
      <div class="dettaglievento" style="text-align:center;">
       Tutti i dettagli dell'evento sono ancora da definire, non essendo ancora diventati associazione. <br />
	   Indicativamente la festa sarà all'inizio dell'anno accademico 2022/2023
      </div>
    </div>
 
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      expired: false,
    };
  },
});
</script>

<style scoped>
.dettaglievento {
  overflow: hidden;
  padding-top: 1rem;
}

.buttonLink {
  padding: 8px;
}

.buttonsEvent {
  overflow: hidden;
  padding-top: 0rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
}

.text_big {
  text-align: center;
  font-weight: bold;
  font-size: calc(4px + 1.27rem + 0.77vw);
}

.text_medium {
  text-align: center;
  font-size: calc(1px + 1rem + 0.35vw);
  max-width: 30rem;
}
.text_small {
  text-align: center;
  font-size: calc(1px + 1rem + 0.3vw);
}
.flex {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  overflow: auto;
}
@media (max-width: 1000px) {
  .flex {
    flex-direction: column;
    overflow: auto;
  }
}
.media {
  width: 100%;
  height: auto;
  overflow: auto;
  max-width: 20rem;
  padding: 0.5rem;
}

p {
  margin-bottom: 0.5rem;
}
</style>
