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
            name: "Scuola DESIGN",
			scuolalink: "../../design/",
			desc: ["Consigli generici per la scuola DESIGN..."],
         	imageUrl:["/img/corsi/pc.png"],
            fasce:[
				{id:1, prezzo:"500-600€", pc:[
					{id:1, text:"Acer Intel N4120", link:"https://www.amazon.it/Notebook-portatile-Acer-display-FullHD/dp/B08FTDRZN6/", imgurl:"/img/pc/acer-intel-n4120.jpg", car:[
						"CPU 4 core",
						"12 GB RAM"
					]},
					{id: 2, text:"pc2", link:"https://example.com/", imgurl:""}
				]
				},
				{id:2, prezzo:"600-800€",
				pc:[
					{id:1, text:"pc3", link:"https://example.com/", imgurl:""},
					{id: 2, text:"pc4", link:"https://example.com/", imgurl:""}
				]}
			]
                
            
        }
    }
  }
}
</script>
