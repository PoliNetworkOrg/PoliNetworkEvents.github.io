<template>
    <div>

        <LayoutNavigationBar language="en" />

        <div class="container2" style="padding-top:calc(6rem + 2vh + 10px);text-align:center;">

            <div>
                <h1>Error {{error.statusCode}}</h1>
                <div style="padding:0.4rem;"></div>
                <h2>{{error.message}}</h2>
            </div>
            <div style="padding:2rem;"></div>
            <a href="/"><LayoutButton>&nbsp;Go to homepage&nbsp;</LayoutButton></a>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
