<template>
    <div>
        <LayoutNavigationBar :language="language" />

        <!-- Page Content -->
        <div class="container3">

            <!-- Jumbotron Header -->
            <header class="my-4 testoCentrale" style="max-width: 100%;border:none;margin-top:10px;margin-bottom:10px;padding-bottom:calc(10px + 1rem);padding-top:calc(2px + 5rem);">
                <div style="text-align:center;">
                    <h2 style="font-size:calc(4px + 1.27rem + 0.77vw);">
                        <span v-if="language == 'it' ">Consigli acquisto PC</span>
                        <span v-if="language == 'en' ">Buying advices for PC</span>
                    </h2>
                    <h5 style="font-size:calc(1px + 1.1rem + 0.6vw);">
                        <a v-if="language=='it'" href="https://polinetwork.github.io/it/">
                            by PoliNetwork
                        </a>
                        <a v-if="language=='en'" href="https://polinetwork.github.io/en/">
                            by PoliNetwork
                        </a>
                    </h5>
                    <div></div>
              

                    <br />

                    <div class="container8">
                        <div class="container6">

                            <p class="lead" style="padding-left:calc(5px + 0.5rem + 0.6vw);padding-right:calc(5px + 0.5rem + 0.6vw);text-align:center;">

                                <span v-if="language=='it'">
                                  📌 Questo sito mira ad essere il più possibile di aiuto agli studenti che si affacciano all'acquisto di un computer per i propri studi (e non solo)
                                </span>
                                <span v-if="language=='en'">
                                    On this page you can consult the candidates of the student representation lists (and the relative programs) in the elections of May 2021 🗳
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

			<p>Scegli la tua scuola:</p>
            <SubpagesScuoleComponent  :scuole-link="scuole"  :language="language" />
        </div>
        <!-- /.container -->



      

        <LayoutFooter :language="language" />
    </div>
</template>

<script>
export default {
    props: {
        language:{
            type:String,
			required:true
        }
    },
	data () {
    	return {
      		scuole: {
          		auic:"./auic/",
          		trei:"./trei/",
          		icat:"./icat/",
          		design:"./design/"
      		}
    	}
	}
}
</script>
