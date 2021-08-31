<template>
  <div>
    <ListePCSingolo :data-lista="items" language="it" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {
        name: "Aerospaziale, Energetica, Meccanica",
        scuolalink: "../../trei/",
        desc: [
          "Va bene tutto con un processore decente (evitate qualunque i3) e almeno 8gb di ram (ovviamente poi a salire diventa tutto più fluido e veloce ma dipende anche dal vostro budget). La scheda video dedicata è un extra non essenziale (migliora solo \"l'esperienza d'uso\"), per l'uso che ne dovrete fare vanno bene anche le più recenti schede video integrate. Se volete comunque un pc con scheda dedicata allora va bene una di quelle standard da 2GB che ormai mettono ovunque.",
          "Per la memoria consiglio almeno 512GB. Quella da 256 è al limite e va bene se tenete sul pc solo i programma essenziali e salvate i file sempre su disco esterno, solo in quest'utimo caso ha senso.",
          "Consiglio di non trascurare la comodità e la durata della batteria. Il primo anno il pc serve poco (1 esame + consultazione dispense e slides) e prendere un mattone da gaming che consuma quanto l'intera casa va bene, ma da metà triennale in poi il PC diventa praticamente d'uso giornaliero fino alla fine degli studi. (Non dico che tutta la gamma gaming non va bene, semplicemente cercate un compromesso ragionevole Ingegneria ≠ pc super pompati)"
        ],
        imageUrl: [
          "/img/corsi/aerospaziale.jpg",
          "/img/corsi/energetica.png",
          "/img/corsi/meccanica.png"
        ],
        fasce: [
          {
            id: 1,
            prezzo: "500-600€",
            pc: [
              {
                id: 1,
                text: "Acer Intel N4120",
                link:
                  "https://www.amazon.it/Notebook-portatile-Acer-display-FullHD/dp/B08FTDRZN6/",
                imgurl: "/img/pc/acer-intel-n4120.jpg",
                car: ["CPU 4 core", "12 GB RAM"]
              },
              { id: 2, text: "pc2", link: "https://example.com/", imgurl: "" }
            ]
          },
          {
            id: 2,
            prezzo: "600-800€",
            pc: [
              { id: 1, text: "pc3", link: "https://example.com/", imgurl: "" },
              { id: 2, text: "pc4", link: "https://example.com/", imgurl: "" }
            ]
          }
        ]
      }
    };
  }
};
</script>
