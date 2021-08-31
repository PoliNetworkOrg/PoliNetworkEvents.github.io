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
            notFound: true,
			scuolalink: "../../trei/",     
            buttons:[
                {
                    id:1, text:"Informatica",
                    linkpage: "./../informatica/", 
                    linkimage:["/img/corsi/pc.png"]
                },
                {
                    id:2,
                    text: "Areospaziale, Energetica, Meccanica",
                    linkpage: "./../aero-energ-mecc/", 
                    linkimage:["/img/corsi/aerospaziale.jpg","/img/corsi/energetica.png","/img/corsi/meccanica.png"]
                }
            ]
        }
    }
  }
}
</script>
