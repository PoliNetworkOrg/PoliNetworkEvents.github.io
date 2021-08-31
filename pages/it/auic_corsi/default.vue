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
			scuolalink: "../../auic/",     
            buttons:[ ]
        }
    }
  }
}
</script>
