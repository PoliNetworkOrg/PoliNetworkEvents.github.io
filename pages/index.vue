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
            <span>{{ $t("Eventi") }} </span>
          </h2>
          <h5 style="font-size: calc(0.5px + 1.05rem + 0.5vw)">
            <a :href="'https://polinetwork.org/' + $i18n.locale">
              by PoliNetwork
            </a>
          </h5>
          <div></div>

          <br />

          <div class="container8">
            <div class="container6">
              <p class="text_small">
                <span>
                  {{ $t("Gli eventi del network!") }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>
      <hr />
      <div class="event-list">
        <a class="single-event" :hreF="localePath('/mma2021/')">
          <div>
            <div class="expired-event">Expired</div>
            <img
              class="event-logo"
              src="/img/events/2021/mma/mma2k21logo.png"
            />
            <div style="padding: 0.5rem"></div>
            <span class="event-title"> MMA 2021 </span>
            <div style="padding: 0.5rem"></div>
            <span class="event-desc"
              >L'evento annuale di incontro fra matricole e admin</span
            >
          </div>
        </a>
		<a v-show="false" class="single-event" :hreF="localePath('/assoc2022/')">
          <div>
            <img
              class="event-logo"
              src="/img/events/2022/assoc/icon.jpg"
            />
            <div style="padding: 0.5rem"></div>
            <span class="event-title"> ASSOC 2022 </span>
            <div style="padding: 0.5rem"></div>
            <span class="event-desc"
              >Il network diventa associazione e vi invita a festeggiare!</span
            >
          </div>
        </a>
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

.single-event {
  padding: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.432);
  border-radius: 1rem;
  max-width: calc(12rem + 4vw);
  /*max-height: calc(12rem + 4vw); */
  margin: auto;
  text-align: center;
  width: 100%;
}

a.single-event:hover {
  text-decoration: none !important;
}

.event-list {
  margin: auto;
  display: flex;
}

.event-title {
  font-size: calc(4px + 0.6rem + 0.6vw);
}

.event-logo {
  width: 100%;
  max-width: calc(4rem + 4vw);
  margin: auto;
  text-align: center;
}

.event-desc {
  font-size: calc(3px + 0.4rem + 0.4vw);
  color: black;
  line-height: normal;
}

.expired-event {
  transform: rotate(-45deg);
  position: absolute;
  color: #6c0000;
  border: 1px solid black;
  padding: 0.4rem;
  border-radius: 0.4rem;
  background-color: #ffe300;
  font-weight: bold;
}
</style>
