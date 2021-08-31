<template>
<div>
          <p class="question">{{question}}</p>
      <p class="answer">{{answer}}</p>
</div>
</template>

<script>
export default {
    props: {
        question:{
            type:String,

			required:true
        },
        answer:{
            type:String,

			required:true
        },
    }
}
</script>

<style  >
.question{
    text-align: left;
  font-weight: bold;
  font-size: 20px;
  padding-left: 5%;
}
.answer{
    padding-left: 5%;
}
</style>