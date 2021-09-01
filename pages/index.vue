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
            <span>{{ $t("Meet My Admin") }} </span>
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
                      "L'evento annuale organizzato da PoliNetwork con Matricole ed Admin di tutte le facoltà. Un'occasione per incontrarsi, chiacchierare, conoscersi davanti a una birra e stringere amicizie per affrontare insieme il nuovo percorso di studio, ma anche per farci qualsiasi domanda!"
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
    <hr />
    <div class="dettaglievento">
      <p class="text_big">{{ $t("Dettagli Evento") }}</p>
      <div style="padding: 0.2rem"></div>
      <div class="flex">
        <div>
          <img class="media" src="/img/mma2k21logo.png" />
        </div>
        <div>
          <p class="text_medium" style="padding-top: 20px">
            📅 {{ $t("Quando: 16/09/2021 ore 21:00") }}
          </p>
          <p class="text_medium" style="max-width: 35rem">
            👥
            {{
              $t(
                "Il numero massimo di partecipanti è limitato e sarà data priorità ad Admin e Matricole"
              )
            }}
          </p>
          <div class="buttonsEvent">
            <a
              href="https://forms.office.com/r/S63ZertabZ"
              target="_blank"
              class="buttonLink"
            >
              <LayoutButton
                >{{ $t("Clicca qui per iscriverti") }} 📑</LayoutButton
              >
            </a>
            <a href="https://t.me/joinchat/AhIXEiN5s1BlMDVk" class="buttonLink">
              <LayoutButton>
                {{ $t("Entra qui per aggiornamenti") }} 📣
              </LayoutButton>
            </a>
            <a href="https://t.me/diegoaldarese" class="buttonLink">
              <LayoutButton>
                {{ $t("Per ulteriori informazioni chiedi qui") }} ✍
              </LayoutButton>
            </a>
          </div>
        </div>
        <div>
          <LayoutMap where="Brasserie Bruxelles Pub Milano"></LayoutMap>
        </div>
      </div>
      <br />
      <hr />
      <p class="text_big" style="padding-top: 20px">FAQ</p>
      <div v-for="question in questions" :key="question.id">
        <LayoutQuestion
          :question="$t(question.question)"
          :answer="$t(question.answer)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import questions2 from "~/assets/json/mma2021_questions.json";
export default Vue.extend({
  data() {
    return {
      questions: questions2,
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
  overflow: auto;
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
  padding-left: calc(4.5px + 1rem + 0.7vw);
  padding-right: calc(4.5px + 1rem + 0.7vw);
  font-size: calc(1.5px + 1.02rem + 0.4vw);
}
.text_small {
  text-align: center;
  padding-left: calc(5px + 0.5rem + 0.6vw);
  padding-right: calc(5px + 0.5rem + 0.6vw);
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
    min-width: 370px;
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

p{
	margin-bottom: 0.5rem;
}
</style>
