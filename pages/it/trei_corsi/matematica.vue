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
        name: "Matematica",
        scuolalink: "../../trei/",
        desc: [],
        imageUrl: ["/img/corsi/matematica.png"],
        tabella: [
          {
            id: 1,
            text: "Software",
            intestazione: [
              "Software",
              "Corso",
              "Note",
              "Mac o Windows?",
              "Requisiti"
            ],
            righe: [
              {
                id: 1,
                celle: [
                  { id: 1, type: "text", text: ["MATLAB"] },
                  {
                    id: 2,
                    type: "list",
                    text: [
                      "Analisi Matematica I",
                      "Matematica Numerica",
                      "Fondamenti di Automatica",
                      "Metodi Analitici e Numerici Delle EDP",
                      "Scienza delle Costruzioni (facoltativo)"
                    ]
                  },
                  {
                    id: 3,
                    type: "text",
                    text: ["MATLAB è fondamentale e sarà usato tantissimo."]
                  },
                  {
                    id: 4,
                    type: "text",
                    text: ["Nessuna differenza."]
                  },
                  {
                    id: 5,
                    type: "link",
                    text: [
                      "https://it.mathworks.com/support/requirements/matlab-system-requirements.html"
                    ]
                  }
                ]
              },
              {
                id: 2,
                celle: [
                  { id: 1, type: "text", text: ["AMPL"] },
                  {
                    id: 2,
                    type: "text",
                    text: ["Fondamenti di Ricerca Operativa"]
                  },
                  {
                    id: 3,
                    type: "text",
                    text: [
                      "AMPL è un software molto di nicchia, viene usato solo in un corso, ha un IDE (ambiente di sviluppo) che è un po' lacunoso."
                    ]
                  },
                  {
                    id: 4,
                    type: "text",
                    text: [
                      "L'IDE di base su Mac dà problemi, ma io personalmente mi sono trovato molto molto meglio su Mac con un editor di testo (Sublime) e lanciando i programmi da terminale. È una cosa alla portata di tutti e che non deve scoraggiare, non escludete Mac solo per AMPL."
                    ]
                  },
                  {
                    id: 5,
                    type: "link",
                    text: [
                      "https://it.mathworks.com/support/requirements/matlab-system-requirements.html"
                    ]
                  }
                ]
              },
              {
                id: 3,
                celle: [
                  { id: 1, type: "text", text: ["R Studio"] },
                  {
                    id: 2,
                    type: "list",
                    text: [
                      "Statistica",
                      "Modelli e Metodi dell'Inferenza Statistica"
                    ]
                  },
                  {
                    id: 3,
                    type: "text",
                    text: [
                      "Usato poco al primo anno, abbastanza per il progetto dell'ultimo anno, ma MMIS è facoltativo."
                    ]
                  },
                  { id: 4, type: "text", text: ["Nessuna differenza."] },
                  {
                    id: 5,
                    type: "link",
                    text: [
                      "https://www.quora.com/What-are-minimum-requirements-for-a-laptop-to-perform-R-statistics"
                    ]
                  }
                ]
              },
              {
                id: 4,
                celle: [
                  { id: 1, type: "text", text: ["Codeblocks / XCode"] },
                  { id: 2, type: "text", text: ["Informatica"] },
                  {
                    id: 3,
                    type: "text",
                    text: ["Qualunque software che compili C++ va bene."]
                  },
                  {
                    id: 4,
                    type: "text",
                    text: [
                      "Su Mac XCode è consigliato, su Windows ci sono più scelte: DevC++, Codeblocks... In generale non è un problema."
                    ]
                  },
                  {
                    id: 5,
                    type: "text",
                    text: [
                      "Dipende dalla versione, ma in generale per l'uso che se fa non serve tanto"
                    ]
                  }
                ]
              },
              {
                id: 5,
                celle: [
                  { id: 1, type: "text", text: ["Excel"] },
                  {
                    id: 2,
                    type: "text",
                    text: ["Economia e Organizzazione Aziendale"]
                  },
                  {
                    id: 3,
                    type: "text",
                    text: [
                      "Va bene anche Keynote o Libre, qualunque foglio di calcolo, è giusto un aiuto."
                    ]
                  },
                  { id: 4, type: "text", text: ["Nessuna differenza."] },
                  { id: 5, type: "text", text: ["un computer"] }
                ]
              }
            ]
          },
          {
            id: 2,
            text: "PC",
            intestazione: [
              "Processore",
              "RAM",
              "SSD (archiviazione)",
              "Scheda grafica"
            ],
            righe: [
              {
                id: 1,
                celle: [
                  { id: 1, type: "text", text: ["i5/i7 ultima generazione"] },
                  {
                    id: 2,
                    type: "text",
                    text: ["8 GB, ma con 16 GB si sta più tranquilli"]
                  },
                  { id: 3, type: "text", text: ["minimo 250 GB"] },
                  {
                    id: 4,
                    type: "text",
                    text: [
                      "il software più pesante è MATLAB, se regge quello, allora a posto"
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 3,
            text: "Appunti",
            intestazione: ["Metodo/Dispositivo", "Descrizione"],
            righe: [
              {
                id: 1,
                celle: [
                  { id: 1, type: "text", text: ["Carta"] },
                  {
                    id: 2,
                    type: "text",
                    text: [
                      "Soluzione più economica, studiare su carta è meno stressante e si ha più spazio a disposizione."
                    ]
                  }
                ]
              },
              {
                id: 2,
                celle: [
                  { id: 1, type: "text", text: ["iPad 10,2"] },
                  {
                    id: 2,
                    type: "text",
                    text: [
                      "Soluzione intermedia, lo schermo non è laminato, ovvero si percepisce il distacco tra la penna e il tratto sullo schermo, lo spazio è piccolo e scorrere tra gli argomenti fa perdere tempo. Consigliato solo per certi corsi, ma comunque sempre stampandoli a fine corso per sfogliarli velocemente. Evitare tablet non-Apple, non sono minimamente all'altezza e OneNote è un pacco assurdo. Uniche possibilità valide: GoodNotes o Notability."
                    ]
                  }
                ]
              },
              {
                id: 3,
                celle: [
                  { id: 1, type: "text", text: ["iPad Air 2020"] },
                  {
                    id: 2,
                    type: "text",
                    text: [
                      "Soluzione per trattarsi un po' bene, schermo laminato, stesso discorso per lo spazio e la stampa."
                    ]
                  }
                ]
              },
              {
                id: 4,
                celle: [
                  { id: 1, type: "text", text: ["iPad Pro"] },
                  {
                    id: 2,
                    type: "text",
                    text: [
                      "Soluzione too much, se avete soldi da buttare è un ottimo prodotto, ma non ne userete più del 15% se prendete solo appunti"
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 4,
            text: "Modello",
            intestazione: ["Modello", "Link", "Prezzo"],
            righe: [
				{
                id: 1,
                celle: [
                  {
                    id: 1,
                    type: "text",
                    text: [
                      "Acer Aspire 5 A515-56-72J0"
                    ]
                  },
                  {
                    id: 2,
                    type: "link",
                    text: ["https://www.amazon.it/Acer-A515-56-72J0-Portatile-Processore-i7-1165G7/dp/B08M3WD1K5/"]
                  },
				  {
                    id: 3,
                    type: "text",
                    text: ["799,00€"]
                  }
                ]
              },
			  {
                id: 2,
                celle: [
                  {
                    id: 1,
                    type: "text",
                    text: [
                      "Acer Nitro 5 AN515-55-53PX"
                    ]
                  },
                  {
                    id: 2,
                    type: "link",
                    text: ["https://www.amazon.it/Acer-AN515-55-53PX-Computer-Processore-i5-10300H/dp/B08M42751M/"]
                  },
				  {
                    id: 3,
                    type: "text",
                    text: ["809,00€"]
                  }
                ]
              },
			  {
                id: 3,
                celle: [
                  {
                    id: 1,
                    type: "text",
                    text: [
                      "HP - PC 15s-fq2003sl"
                    ]
                  },
                  {
                    id: 2,
                    type: "link",
                    text: ["https://www.amazon.it/HP-15s-fq2003sl-Notebook-i7-1165G7-Windows/dp/B08WCDZ73J"]
                  },
				  {
                    id: 3,
                    type: "text",
                    text: ["799,99€"]
                  }
                ]
              },
              {
                id: 4,
                celle: [
                  {
                    id: 1,
                    type: "text",
                    text: [
                      "(A1398) MacBook Pro 15-Inch 'Core i7' 2.3 Late 2013"
                    ]
                  },
                  {
                    id: 2,
                    type: "link",
                    text: ["https://www.amazon.it/Apple-MacBook-Late-2013-Ricondizionato/dp/B08C73DHMMT"]
                  },
				  {
                    id: 3,
                    type: "text",
                    text: ["950,00€"]
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  }
};
</script>
