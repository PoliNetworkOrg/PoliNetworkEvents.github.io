<template>
  <div>
    <LayoutNavigationBar :language="$i18n.locale" />

    <!-- Page Content -->
    <div class="container3">
      <!-- Jumbotron Header -->
      <header
        class="my-4 testoCentrale"
        style="max-width: 100%;border:none;margin-top:10px;margin-bottom:10px;padding-bottom:calc(10px + 1rem);padding-top:calc(2px + 5rem);"
      >
        <div style="text-align:center;">
          <h2 class="text_big">
            <span>{{$t('Meet My Admin')}}</span>
          </h2>
          <h5 style="font-size:calc(1px + 1.1rem + 0.6vw);">
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
                  📌 {{$t('L\'evento annuale organizzato da PoliNetwork con Matricole ed Admin di tutte le facoltà')}}
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
    <!-- /.container -->

    <div  class="dettaglievento">
      <p class="text_big">{{$t('Dettagli Evento')}}</p>
      <div class="flex">
        <div>
          <img class="media" src="/img/mma2k21logo.png" />
        </div>
        <div>
          <p class="text_small" style="padding-top: 20px;">{{$t('Quando: 16/09/2021 ore 21:00')}}</p>
          <p class="text_small">{{$t('Numero massimo di partecipanti: 60')}}</p>
          <div
            class="button"
            style="font-weight: bold;"
            onclick="location.href='https://forms.office.com/r/S63ZertabZ'"
          >
            {{$t('Clicca qui per iscriverti')}}
          </div>
          <div
            class="button"
            style="font-weight: bold;"
            onclick="location.href='https://t.me/joinchat/AhIXEiN5s1BlMDVk'"
          >
            {{$t('Entra qui per aggiornamenti')}}
          </div>
          <div
            class="button"
            style="font-weight: bold;"
            onclick="location.href='https://t.me/diegoaldarese'"
          >
            {{$t('Per ulteriori informazioni chiedi qui')}}
          </div>
        </div>
        <div>
          <iframe
            class="media"
            src="https://maps.google.com/maps?q=bruxelles%20pub&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="20"
            scrolling="no"
          ></iframe>
        </div>
      </div>
      <p class="text_big" style="padding-top: 20px;">FAQ</p>
      <LayoutQuestion
        question="Perché c'è un limite al numero di partecipanti?"
        answer="A causa delle restrizioni anti Covid-19 il locale ha imposto questo limite"
      />
      <LayoutQuestion
        question="Perché possono partecipare soltanto Admin e Matricole?"
        answer="A causa del limite al numero di persone abbiamo deciso di dare priorità"
        alle matricole, che potranno anche confrontarsi con noi Admin"
      />
      <LayoutQuestion
        question="Quali sono e come verranno trattati i dati inviati tramite il form di iscrizione?"
        answer="Il form raccoglie il Codice Persona e il tag Telegram o numero di telefono. Entro 24 ore dal termine dell'evento tutti i dati saranno cancellati. Utilizzeremo queste informazioni per accertare l'appartenenza al Politecnico di Milano come Matricole o Admin e per mandare comunicazioni inerenti l'evento. I dati sono gestiti da Diego Aldarese, organizzatore dell'evento"
      />
    </div>
    <LayoutFooter :language="$i18n.locale" />
  </div>
</template>



<style scoped>
.text_big {
  text-align: center;
  font-weight: bold;
  font-size: calc(4px + 1.27rem + 0.77vw);
}
.text_small {
  text-align: center;
  padding-left: calc(5px + 0.5rem + 0.6vw);
  padding-right: calc(5px + 0.5rem + 0.6vw);
}
.flex {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
}
@media (max-width: 1000px) {
  .flex {
    flex-direction: column;
    min-width: 370px;
  }
}
.media {
  border-radius: 20px;
  width: 100%;
  height: 20rem;
}
.button {
  margin: 10px;
  overflow: hidden;
  border-radius: 0.6em;
  padding: 1em 2em;
  background-color: #1156ae;
  color: white;
  cursor: pointer;
  border: 0;
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 5%);
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  box-sizing: border-box;
}
.button:hover {
  background-color: #0c3c7d;
}
</style>
