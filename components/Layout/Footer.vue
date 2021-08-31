<template>
    <div>
        <br />
        <hr />
        <!-- Footer -->
        <footer class="py-5 bg-dark" style="padding-top:1rem !important;padding-bottom:2rem !important;">
            <div class="container">
                <p class="m-0 text-center" style="font-size: calc(3px + 0.55rem + 0.35vw);">Copyright &copy; <a :href="'https://polinetwork.github.io/' + language">PoliNetwork</a></p>

    
                <p class="m-0 text-center" style="font-size: calc(3px + 0.3rem + 0.2vw);color: #000000d9;padding-top:10px;">
                    <span v-if="language =='it'">Questo sito non è affiliato al Politecnico di Milano</span>
                    <span v-if="language =='en'">This site is not affiliated with the Politecnico di Milano</span>
                </p>
            </div>
            <!-- /.container -->
        </footer>
    </div>
</template>

<script>
export default {
    props: {
        language:{
            type:String,
			required:true
        }
    }
}
</script>
