<template>
    <div>
        <ListePCSingolo :data-lista="items" language="it" />
    </div>
</template>

<script>
export default {
    data () {
    return {
      items: {
            name: "Urbanistica",
			scuolalink: "../../auic/",
			desc: ["I programmi che serve che girino bene sono sostanzialmente: tutto pacchetto Adobe (nello specifico Photoshop illustrator e indesign) + gis (archgis e qgis entrambi) + AutoCAD per il primo anno prevalentemente.",
"È sconsigliato il Mac ed è privilegiato Windows solo per una questione di compatibilità con archgis (che sarà necessario scaricare perché spiegano su quello) i Mac lasciamoli ai grafici, noi non lo siamo 😂",
"Mentre per la grandezza io direi di rimanere tra i 14 e 15 pollici, più piccoli si rischia di diventare ciechi e gobbi e più di 15 pollici di spaccarsi la schiena (provato sulla mia pelle)",
"Firmato: una rappresentante di urbanistica"],
         	imageUrl:["/img/corsi/urbanistica.png"],
            fasce:[		]
                
            
        }
    }
  }
}
</script>
