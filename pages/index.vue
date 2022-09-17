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

      <div v-for="cat in categories" :key="cat.desc">
        <div v-if="events.filter(e => e.expired == cat.expired && e.show).length > 0 ">
        <div style="padding-top: -5px"></div>
        <hr />
        <div style="text-align: center">{{ $t(cat.desc) }}</div>
        <div style="padding-top: 10px"></div>
        <div class="event-list">
          <a
            class="single-event"
            v-for="event in events"
            :key="event.name"
            :hreF="localePath(event.name)"
            v-show="event.show && event.expired == cat.expired"
          >
            <div>
              <div v-if="event.expired" class="expired-event">
                {{ $t("Terminato") }}
              </div>
              <div v-if="!event.expired && event.full" class="expired-event">
                {{ $t("Al Completo") }}
              </div>
              <img class="event-logo" :src="event.imgPath" />
              <div style="padding: 0.5rem"></div>
              <span class="event-title"> {{ event.title }} </span>
              <div style="padding: 0.5rem"></div>
              <span class="event-desc">
                {{ $t(event.desc) }}
              </span>
            </div>
          </a>
          </div>
        </div>
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
      events: [
        {
          name: "assoc2022",
          title: "MMA 2022",
          desc: "Descrizione",
          imgPath: "/img/events/2022/assoc/icon.jpg",
          expired: false,
          show: false,
          full: false,
        },
        {
          name: "mma2022",
          title: "MMA 2022",
          desc: "L'evento annuale di incontro fra matricole e admin",
          imgPath: "/img/events/2021/mma/mma2k21logo.png",
          expired: true,
          show: true,
          full: true,
        },
        {
          name: "mma2021",
          title: "MMA 2021",
          desc: "L'evento annuale di incontro fra matricole e admin",
          imgPath: "/img/events/2021/mma/mma2k21logo.png",
          expired: true,
          show: true,
          full: true,
        },
      ],
      categories: [
        {
          desc: "In arrivo",
          expired: false,
        },
        {
          desc: "Passati",
          expired: true,
        },
      ],
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
