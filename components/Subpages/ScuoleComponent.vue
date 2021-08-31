<template>
    <div class="scuoleContainer">

        <!-- Page Features -->
        <div class="row text-center">

            <div class="col-lg-3 col-md-6 scuolaCard" style="">
                <a :href="scuoleLink.auic">
                    <div class="card h-100">
                        <div class="listTile" style="width: 100%;">
                            <div class="divScuole">
                                <div>
                                    <div>
                                        <h1 class="scuole">

                                            <span v-if="language=='it'">
                                                Scuola AUIC
                                            </span>
                                            <span v-if="language=='en'">
                                                AUIC School
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h5 class="scuoleTitolo">

                                            <span v-if="language=='it'">
                                                ARCHITETTURA URBANISTICA INGEGNERIA DELLE COSTRUZIONI
                                            </span>
                                            <span v-if="language=='en'">
                                                URBAN ARCHITECTURE CONSTRUCTION ENGINEERING
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-6 scuolaCard">
                <a :href="scuoleLink.trei">
                    <div class="card h-100">
                        <div class="listTile" style="width: 100%;">

                            <div class="divScuole">
                                <div>
                                    <div>
                                        <h1 class="scuole">

                                            <span v-if="language=='it'">
                                                Scuola 3I
                                            </span>
                                            <span v-if="language=='en'">
                                                3I School
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h5 class="scuoleTitolo">

                                            <span v-if="language=='it'">
                                                INGEGNERIA INDUSTRIALE E DELL' INFORMAZIONE
                                            </span>
                                            <span v-if="language=='en'">
                                                INDUSTRIAL AND INFORMATION ENGINEERING
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-3 col-md-6 scuolaCard" style="">
                <a :href="scuoleLink.icat">
                    <div class="card h-100">
                        <div class="listTile" style="width: 100%;">

                            <div class="divScuole">
                                <div>
                                    <div>
                                        <h1 class="scuole">

                                            <span v-if="language=='it'">
                                                Scuola ICAT
                                            </span>
                                            <span v-if="language=='en'">
                                                ICAT School
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h5 class="scuoleTitolo">

                                            <span v-if="language=='it'">
                                                INGEGNERIA CIVILE, AMBIENTALE E TERRITORIALE
                                            </span>
                                            <span v-if="language=='en'">
                                                CIVIL, ENVIRONMENTAL AND TERRITORIAL ENGINEERING
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-3 col-md-6 scuolaCard" style="">
                <a :href="scuoleLink.design">
                    <div class="card h-100">
                        <div class="listTile" style="width: 100%;">

                            <div class="divScuole">
                                <div>
                                    <div>
                                        <h1 class="scuole">
                                            <span v-if="language=='it'">
                                                Scuola Design
                                            </span>
                                            <span v-if="language=='en'">
                                                Design School
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h5 class="scuoleTitolo">

                                            <span v-if="language=='it'">
                                                MODA, INTERNI, COMUNICAZIONE, PRODOTTO
                                            </span>
                                            <span v-if="language=='en'">
                                                FASHION, INTERIORS, COMMUNICATION, PRODUCT
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <!-- /.row -->
    </div>
</template>

<script>
export default {
    props: {
        scuoleLink:{
            type:Object,
            default : null
        },
        language:{
          type:String,
          required:true
        }
    }
}
</script>

<style>

    .scuoleTitolo {
        font-size: calc(1px + 0.4rem + 0.95vw);
        width: 100%;
        text-align: center;
        word-break: break-word;
    }

    .scuole {
        font-size: calc(3px + 0.9rem + 1.1vw);
        width: 100%;
        text-align: center;
        word-break: break-word;
    }

    .scuolaCard {
        padding: calc(1px + 0.1rem + 1vw);
    }

    .scuoleContainer {
        margin: auto;
        max-width: calc(30px + 65vw + 3rem);
    }
</style>
